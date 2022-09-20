import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";

const Nav = () => {
  const { showModal, setShowModal, totalQnt } = useStateContext();

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:p-6">
      {/* Logo */}
      <div className="text-xl tracking-wide font-mono">
        <Link href="/">ShopStack</Link>
      </div>

      {/* Right */}
      <div
        onClick={() => setShowModal(!showModal)}
        className="relative text-[25px] scaleAnim"
      >
        <BsCart />
        <span className="absolute -top-1 -right-2 bg-red-300 w-5 h-5 rounded-full grid place-items-center text-xs font-semibold">
          {totalQnt}
        </span>
      </div>
    </div>
  );
};

export default Nav;
