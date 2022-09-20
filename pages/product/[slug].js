import React, { useState } from "react";
import { client, urlFor } from "../../sanity";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Product from "../../components/Product";
import { useStateContext } from "../../context/StateContext";

const Details = ({ product, products }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const { incQnt, decQnt, qnt, addProduct } = useStateContext();

  return (
    <div className="">
      <section className="md:grid grid-cols-3 max-w-[90rem] mx-auto gap-10 my-10 p-4">
        {/* Left */}
        <div className="flex flex-col justify-center items-center mb-10">
          <img
            src={urlFor(product.image[imgIndex])}
            className="bg-gray-300 w-[20rem] h-[18rem] p-4 rounded-xl cursor-pointer"
            alt=""
          />
          <div className="flex gap-2 mt-4">
            {/* multiple images */}
            {product.image.map((item, i) => (
              <img
                key={i}
                className={`bg-gray-200 p-2 w-14 lg:w-20 rounded-lg ${
                  imgIndex === i && "bg-red-600 scaleAnim"
                }`}
                src={urlFor(item)}
                onMouseEnter={() => setImgIndex(i)}
                alt=""
              />
            ))}
          </div>
        </div>
        {/* Rigth */}
        <div className="space-y-4 col-span-2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <h3 className="font-semibold">Details :</h3>
          <p className="text-gray-500 text-sm ">
            {product.details}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            aliquid?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsa, debitis! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsum, aliquid?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsa, debitis! Lorem ipsum dolor sit amet
          </p>
          <p className="text-lg font-semibold text-[#e24b40]">
            ${product.price}
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-semibold">Quantity :</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => decQnt()}
                className={`bg-[#EC9F05] p-2 rounded-md scaleAnim text-white ${
                  qnt === 1 && "bg-[gray]"
                }`}
              >
                <AiOutlineMinus />
              </button>
              <p className="font-semibold text-lg">{qnt}</p>
              <button
                onClick={() => incQnt()}
                className="bg-[#FF4E00] p-2 rounded-md scaleAnim text-white"
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="space-x-4 md:space-x-8">
            <button
              onClick={() => addProduct(product, qnt)}
              className="py-2 px-4 bg-[#EC9F05] hover:bg-[#FF4E00] scaleAnim duration-200 text-white font-medium rounded-md mt-4"
            >
              Add to Cart
            </button>
            <button className="py-2 px-4 bg-[#FF4E00] hover:bg-[#EC9F05] scaleAnim duration-200 text-white font-medium rounded-md mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      {/* Your may Also Like */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-center mb-10">
          You may also like
        </h1>
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-10">
          {products.map((item) => (
            <Product key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

export async function getStaticPaths() {
  const query = `*[_type == "product"]`;
  const product = await client.fetch(query);
  const paths = product.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(productQuery);
  const productsQuery = `*[_type == "product"]`;
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};
