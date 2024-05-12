import { RiMedicineBottleFill } from "react-icons/ri";
import { RiMedicineBottleLine } from "react-icons/ri";
import { GiMedicinePills } from "react-icons/gi";
import { MdOutlineBabyChangingStation } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { RiFilter3Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { CgNotes } from "react-icons/cg";
import { BiCart } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import React from "react";
import CardProduct from "../components/CardProduct";

const MainScreen = () => {
  return (
    <>
      <div className=" w-full h-full flex justify-start items-start bg-white flex-col gap-y-6 ">
        {/* Section Header */}
        <div className="flex flex-row w-full justify-between items-center">
          {/* Profile */}
          <div className="flex flex-col">
            <h1 className="text-[14px]">Selamat Datang</h1>
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <HiUserCircle className="text-gray-800" />
              <h1 className="text-gray-800">Apotek Amanah Magetan</h1>
            </div>
          </div>

          {/* Notification */}
          <div className="bg-gray-100 rounded-full size-8 justify-center items-center flex">
            <IoIosNotifications className="size-5 text-gray-900" />
          </div>
        </div>

        {/* Section Search Bar */}
        <div className="flex flex-row gap-x-2 w-full justify-between items-center">
          <label className="input input-bordered flex items-center gap-2 bg-white w-full h-[50px]">
            <BiSearch className="size-5" />
            <input type="text" className="grow" placeholder="Cari Obat Kamu" />
          </label>

          <div className="bg-gray-700 rounded-lg h-full w-[60px] flex justify-center items-center">
            <RiFilter3Line className="text-gray-300 size-5" />
          </div>
        </div>

        {/* Section Carousel */}
        <div className="w-full h-[150px] bg-gray-100 rounded-md flex flex-col">
          <div className="flex flex-col text-gray-600 px-6 py-6 justify-center">
            <h1 className="font-bold">Jellybee</h1>
            <h1 className="text-[14px] w-[70%]">
              Kandungan vitamin yang mudah dicerna
            </h1>
            <button className="bg-gray-800 px-4 py-1 flex justify-center items-center text-white text-[13px] rounded-lg w-[35%] mt-3">
              Jelajahi
            </button>
          </div>

          <div className="flex flex-row gap-x-2 w-full justify-center items-center mt-3">
            <div className="bg-gray-500 size-2 rounded-full"></div>
            <div className="bg-gray-300 size-2 rounded-full"></div>
            <div className="bg-gray-300 size-2 rounded-full"></div>
          </div>
        </div>

        {/* Section Kategori */}
        <div className="flex flex-col gap-y-5 mt-6">
          <h1 className="text-gray-800">Kategori</h1>
          <div className="flex flex-row gap-5 w-full">
            {/* One Category */}
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <GiHealthNormal className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Kesehatan</h1>
            </div>
            {/* One Category */}
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <MdOutlineBabyChangingStation className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Ibu & Bayi</h1>
            </div>
            {/* One Category */}
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <GiMedicinePills className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Herbal</h1>
            </div>
            {/* One Category */}
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <RiMedicineBottleFill className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">P3K</h1>
            </div>
          </div>
        </div>

        {/* Section Product */}
        <div className="flex flex-col mt-2">
          <h1 className="text-gray-800">Produk</h1>
          <div className="flex flex-row gap-x-2 w-full mt-3">
            <div className=" px-4 py-2 flex justify-center items-center rounded-[20px] border-gray-900 border-[1px]">
              <h1 className="text-[13px] text-gray-800">Semua</h1>
            </div>
            <div className=" px-4 py-2 flex justify-center items-center rounded-[20px] border-gray-900 border-[1px]">
              <h1 className="text-[13px] text-gray-800">Terbaru</h1>
            </div>
            <div className=" px-4 py-2 flex justify-center items-center rounded-[20px] border-gray-900 border-[1px]">
              <h1 className="text-[13px] text-gray-800">Populer</h1>
            </div>
          </div>
        </div>

        {/* Section Card Product */}
        <div className="grid grid-cols-2 gap-4 w-full h-full pb-[30%]">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
