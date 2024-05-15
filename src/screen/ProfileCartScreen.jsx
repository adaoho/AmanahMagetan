import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import React from "react";
import MobileLayout from "../layout/MobileLayout";
import FooterButton from "../components/FooterButton";
import HeaderBack from "../components/HeaderBack";
import { BsCartPlus } from "react-icons/bs";

const ProfileCartScreen = () => {
  return (
    <>
      <MobileLayout>
        <HeaderBack title={"Keranjang"} />

        <div className="w-full flex flex-col h-full mt-4 gap-y-3">
          {/* Cart */}
          <div className="h-fit flex flex-row w-full gap-x-4 border-b-[1px] pb-3 relative">
            <div className="size-24 flex overflow-hidden rounded-lg">
              <img
                src="/sample/test_med_photo.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-1 justify-center">
              <h1 className="text-[16px] w-14 text-gray-700">
                Jellybee Multivitamin
              </h1>
              <h1 className="text-[14px] text-gray-500">Rp 120.000</h1>
            </div>

            {/* Button Plus */}
            <div className="absolute right-3 bottom-2 flex flex-row gap-x-2 items-center">
              <AiFillMinusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
              <p className="text-gray-600">1</p>
              <AiFillPlusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
            </div>
          </div>

          {/* Cart */}
          <div className="h-fit flex flex-row w-full gap-x-4 border-b-[1px] pb-3 relative">
            <div className="size-24 flex overflow-hidden rounded-lg">
              <img
                src="/sample/test_med_photo.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-1 justify-center">
              <h1 className="text-[16px] w-14 text-gray-700">
                Jellybee Multivitamin
              </h1>
              <h1 className="text-[14px] text-gray-500">Rp 120.000</h1>
            </div>

            {/* Button Plus */}
            <div className="absolute right-3 bottom-2 flex flex-row gap-x-2 items-center">
              <AiFillMinusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
              <p className="text-gray-600">1</p>
              <AiFillPlusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
            </div>
          </div>

          {/* Cart */}
          <div className="h-fit flex flex-row w-full gap-x-4 border-b-[1px] pb-3 relative">
            <div className="size-24 flex overflow-hidden rounded-lg">
              <img
                src="/sample/test_med_photo.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-1 justify-center">
              <h1 className="text-[16px] w-14 text-gray-700">
                Jellybee Multivitamin
              </h1>
              <h1 className="text-[14px] text-gray-500">Rp 120.000</h1>
            </div>

            {/* Button Plus */}
            <div className="absolute right-3 bottom-2 flex flex-row gap-x-2 items-center">
              <AiFillMinusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
              <p className="text-gray-600">1</p>
              <AiFillPlusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
            </div>
          </div>
        </div>
        <FooterButton>
          <div className="flex flex-col">
            <h1 className="text-[12px] text-gray-400">Total Harga</h1>
            <h1 className="font-bold">Rp 260.000</h1>
          </div>

          {/* Button Add to Cart */}
          <div className="bg-gray-800 flex justify-center items-center gap-x-2 px-5 py-2 text-white rounded-xl">
            <BsCartPlus className="size-4.5 mb-0.5" />
            <h1>Pesan Obat</h1>
          </div>
        </FooterButton>
      </MobileLayout>
    </>
  );
};

export default ProfileCartScreen;
