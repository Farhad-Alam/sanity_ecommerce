import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="mt-20 mb-10 text-center space-y-2">
      <h1 className="font-bold">
        2022 ShopStack,,<span>Created by Farhad Hossain.. </span>
      </h1>
      <p className="text-sm font-semibold">All rights reserved</p>
      <div className="text-2xl flex justify-center items-center space-x-2">
        <FaFacebookSquare />
        <AiFillInstagram />
        <ImLinkedin />
      </div>
    </div>
  );
};

export default Footer;
