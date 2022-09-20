import React from "react";
import Product from "./Product";

const Products = ({ data }) => {
  return (
    <section className="my-10 max-w-7xl mx-auto p-4 md:p-6 ">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold ">Top Rated Products</h1>
        <p className="text-gray-500">Variations of all Products</p>
      </div>
      {/* All Products */}
      <div className="mt-16 flex flex-col md:flex-row gap-x-4 gap-y-8 flex-wrap justify-center items-center">
        {data.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
