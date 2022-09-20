import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../sanity";

const Modal = () => {
  const {
    incQnt,
    decQnt,
    qnt,
    setShow,
    setShowModal,
    productItems,
    totalQnt,
    totalPrice,
    toggleBtn,
  } = useStateContext();

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed top-0 bg-[rgba(0,0,0,0.4)] h-full w-screen z-20 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 bg-white w-[90%] md:w-[60%] lg:w-[30%] p-8 overflow-y-scroll h-full"
      >
        {/* Top */}
        <div className="flex items-center gap-2">
          <AiOutlineLeft
            className="scaleAnim"
            onClick={() => setShowModal(false)}
            size={20}
          />
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <span className="text-red-600 text-lg tracking-wide font-semibold">
            ( {totalQnt} items )
          </span>
        </div>
        {/* Bottom */}
        {productItems.length > 0 ? (
          <div className="">
            <div className="space-y-8 my-10 ">
              {productItems.map((product) => {
                return (
                  <div key={product._id} className="flex justify-between">
                    <div>
                      <img
                        className="bg-gray-200 w-[10rem] p-2 rounded-lg"
                        src={urlFor(product.image[0])}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h1 className="text-lg font-semibold">{product.name}</h1>
                      <div className="flex items-center space-x-4">
                        <button
                        
                          className={`bg-[#EC9F05] p-2 rounded-md scaleAnim text-white ${
                            qnt === 1 && "bg-[gray]"
                          }`}
                        >
                          <AiOutlineMinus />
                        </button>
                        <p className="font-semibold text-lg">
                          {product.quantity}
                        </p>
                        <button
                          onClick={() => toggleBtn(product._id, "inc")}
                          className="bg-[#FF4E00] p-2 rounded-md scaleAnim text-white"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold text-lg">$69</span>
                      <GrFormClose size={30} />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Bottom */}
            <div className="space-y-8 p-10 ">
              <div className="flex justify-between text-lg">
                <h1 className="font-semibold tracking-wide">SubTotals:</h1>
                <p className="font-semibold ">${totalPrice}</p>
              </div>
              <button className="mx-auto block scaleAnim py-2 px-4 bg-red-500 text-white font-semibold uppercase rounded-md tracking-wide">
                pay with stripe
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4 justify-center items-center h-[90%]">
            <BsCartX size={80} />
            <h1 className="text-2xl font-semibold">No Items Here..</h1>
            <p className="text-gray-500 text-sm">Continue Your Shopping</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
