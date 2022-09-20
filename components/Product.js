import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

const Product = ({ item }) => {
  // const randomValue = Math.floor(Math.random() * item.image.length);
  return (
    <Link href={`/product/${item.slug?.current}`}>
      <div className="w-[14rem] space-y-4 hover:scale-105 duration-200 ease-in cursor-pointer">
        <div className="bg-gray-200 rounded-xl p-2">
          <img
            src={urlFor(item.image[0])}
            alt=""
            className="h-[13rem]"
          />
        </div>
        <h1 className="font-semibold ">{item.name}</h1>
        <span className="text-sm font-semibold">${item.price}</span>
      </div>
    </Link>
  );
};

export default Product;
