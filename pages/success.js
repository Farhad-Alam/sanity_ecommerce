import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { useStateContext } from "../context/StateContext";
import { runFireWorks } from "../utils/utils";

const Success = () => {
  const { setTotalQnt, setProductItems, setTotalPrice } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    setProductItems([]);
    setTotalPrice(0);
    setTotalQnt(0);
    runFireWorks();
  }, []);

  return (
    <div className="h-[70vh] flex justify-center items-center text-center my-10">
      <div className="bg-gray-200 rounded-md py-14 w-full md:w-[60%] lg:w-[50%] space-y-2">
        <button className="text-lime-500 text-5xl">
          <HiShoppingBag />
        </button>
        <h1 className="text-2xl font-semibold">Thanks You for your order</h1>
        <p className="text-sm text-gray-500">
          Check your email inbox for the receipt
        </p>
        <p className="text-sm ">
          If you hav eany question, please email:
          <span className="text-red-500 font-semibold">
            {" "}
            irfanmini11@gmail.com
          </span>
        </p>
        <div onClick={() => router.push("/")}>
          <button className="bg-red-400 py-2 px-4 uppercase rounded-md text-white mt-8">
            Continueing Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
