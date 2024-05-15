import { BsCartPlus } from "react-icons/bs";
import React from "react";
import HeaderBack from "../components/HeaderBack";
import FooterButton from "../components/FooterButton";
import MobileLayout from "../layout/MobileLayout";

const Product = () => {
  return (
    <>
      <MobileLayout>
        <HeaderBack title={"Detail Produk"} />

        {/* Body of Description */}
        <div className="absolute w-full h-[100dvh] top-0 -z-10 justify-start items-center flex flex-col">
          {/* Top of Picture */}
          <div className="flex flex-col w-full h-[60%] relative">
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

          {/* Description Section */}
          <div className="w-full h-[40%] flex flex-col p-[30px] border-gray-500 overflow-auto">
            <div className="flex flex-row w-full h-[40px] justify-between items-center">
              <h1 className="font-bold text-[18px]">Multijelly Bean</h1>
              <h1 className="text-[14px] text-gray-500">Kategori Obat</h1>
            </div>

            {/* divider */}
            <div className="border-b-[1px] border-gray-200 mb-4 pt-2"></div>

            <div className="h-[300px]">
              <h1 className=" text-gray-800 text-[13px] font-bold">
                Deskripsi Produk
              </h1>
              <p className="text-[12px] leading-6 mt-3 text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Justo auctor fringilla
                egestas id hac condimentum aliquam. Dignissim varius amet augue
                aliquam augue aenean. Dui neque maecenas eget lobortis. Dui
                morbi massa ultricies est in diam facilisis ac diam.
              </p>
            </div>
          </div>
        </div>

        {/* Add to Cart Section */}
        <FooterButton>
          <div className="flex flex-col">
            <h1 className="text-[12px] text-gray-400">Harga</h1>
            <h1 className="font-bold">Rp 120.000</h1>
          </div>

          {/* Button Add to Cart */}
          <div className="bg-gray-800 flex justify-center items-center gap-x-2 px-5 py-2 text-white rounded-xl">
            <BsCartPlus className="size-4.5 mb-0.5" />
            <h1>Add to Cart</h1>
          </div>
        </FooterButton>
      </MobileLayout>
    </>
  );
};

export default Product;
