import { BsCartPlus } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import HeaderBack from "../components/HeaderBack";

const Product = () => {
  return (
    <>
      <div>
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-white fixed overflow-scroll">
          <div className="w-[100dvw] max-w-[428px] h-screen flex flex-col justify-between items-center px-[20px] pt-8 relative">
            <HeaderBack title={"Detail Produk"} />

            {/* Body of Description */}
            <div className="absolute w-full h-full top-0 -z-10 justify-center items-center">
              {/* Top of Picture */}
              <div className="flex flex-col w-full h-[50%] relative">
                <img
                  src="/sample/test_med_photo.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />

                <div className="absolute flex flex-row gap-x-3 w-full h-[80px] bottom-7 justify-center items-center">
                  <div className="size-14 bg-gray-400 rounded-lg"></div>
                  <div className="size-14 bg-gray-400 rounded-lg"></div>
                  <div className="size-14 bg-gray-400 rounded-lg"></div>
                  <div className="size-14 bg-gray-400 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="absolute bottom-0 w-full h-[80px] bg-gray-100 flex justify-between items-center px-[30px] rounded-t-2xl border-t-4">
              <div className="flex flex-col">
                <h1 className="text-[12px] text-gray-400">Harga</h1>
                <h1 className="font-bold">Rp 120.000</h1>
              </div>

              {/* Button Add to Cart */}
              <div className="bg-gray-800 flex justify-center items-center gap-x-2 px-5 py-2 text-white rounded-xl">
                <BsCartPlus className="size-4.5 mb-0.5" />
                <h1>Add to Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
