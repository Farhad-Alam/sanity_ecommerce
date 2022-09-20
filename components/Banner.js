import React from "react";
import { urlFor } from "../sanity";

const Banner = ({ data }) => {
  return (
    <div className="m-4 lg:m-6 ">
      <div className="relative bg-gray-300 p-4 lg:p-8 max-w-[90rem] mx-auto rounded-lg">
        {/* Left */}
        <div className="capitalize space-y-2 mt-10">
          <h3 className="font-semibold">{data.smallText}</h3>
          <h2 className="font-bold text-2xl md:text-5xl">{data.midText}</h2>
          <h1 className="uppercase text-5xl md:text-9xl font-bold text-white tracking-wider">
            {data.product}
          </h1>
          <div>
            <button className="capitalize bg-red-500 mt-4 rounded-lg px-4 py-2 text-white font-semibold tracking-wide hover:bg-white hover:text-gray-800 duration-200 ease-in scaleAnim">
              {data.buttonText}
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="text-right w-[20rem] ml-auto mt-4 space-y-2">
          <h2 className="font-semibold">Description</h2>
          <p className="text-sm text-gray-500 tracking-wide">{data.desc}</p>
        </div>
        {/* Baneer Image */}
        <img
          className="absolute top-0 lg:top-5 right-5 md:right-[8rem] lg:right-[20rem] w-[8rem] md:w-[28rem]"
          src={urlFor(data.image)}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Banner;
