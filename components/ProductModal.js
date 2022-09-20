import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../sanity";
import { getStripe } from "../utils/getStripe";

const ProductModal = () => {
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
    removeProduct,
  } = useStateContext();

  const handleCheckOut = async () => {
    const stripe = await getStripe();
    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productItems),
      });

      const data = await res.json();
      toast.loading("Redirecting..");
      stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] w-screen h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 bg-white h-full w-[95%] md:w-[60%] lg:w-[40%] xl:w-[35%] p-4 md:p-8"
      >
        {/* Top */}
        <div className="flex items-center gap-2 mb-10">
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
        <div className="space-y-8 w-full h-[70%] overflow-scroll scrollbar-hide">
          {productItems.length > 0 ? (
            productItems.map((product) => {
              return (
                <div
                  key={product._id}
                  className="flex justify-between space-x-4"
                >
                  <div>
                    <img
                      className="bg-gray-200 w-[6rem] md:w-[8rem] xl:w-[10rem] p-2 rounded-lg"
                      src={urlFor(product?.image[0])}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <h1 className=" md:text-lg font-semibold">
                      {product.name}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleBtn(product._id, "dec")}
                        className={`bg-[#EC9F05] p-2 rounded-md scaleAnim text-white ${
                          product.quantity === 1 && "bg-[gray]"
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
                  <div className="flex flex-col justify-between items-center">
                    <span className="font-semibold md:text-lg">
                      ${product.price}
                    </span>
                    <GrFormClose
                      size={30}
                      onClick={() => removeProduct(product._id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col space-y-4 justify-center items-center h-[90%]">
              <BsCartX size={80} />
              <h1 className="text-2xl font-semibold">No Items Here..</h1>
              <p className="text-gray-500 text-sm">Continue Your Shopping</p>
            </div>
          )}
        </div>

        <div className="space-y-8 p-10 w-full h-[30%] flex flex-col justify-center items-center">
          <div className="flex justify-between w-full text-lg">
            <h1 className="font-semibold tracking-wide">SubTotals:</h1>
            <p className="font-semibold ">${totalPrice}</p>
          </div>
          <button
            onClick={handleCheckOut}
            className="mx-auto block scaleAnim py-2 px-4 bg-red-500 text-white font-semibold uppercase rounded-md tracking-wide"
          >
            pay with stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
