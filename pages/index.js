import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Products from "../components/Products";
import { client } from "../sanity";

const Home = ({ product, banner }) => {
  return (
    <div>
      <Banner data={banner[0]} />
      <Products data={product} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const product = await client.fetch(productQuery);
  const bannerQuery = `*[_type == "banner"]`;
  const banner = await client.fetch(bannerQuery);

  return {
    props: {
      product,
      banner,
    },
  };
};
