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

const MainScreen = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-black relative ">
        <div className="w-[428px] h-screen flex justify-start items-start bg-white px-8 pt-8 flex-col gap-y-6">
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
          <div className="flex flex-row gap-x-2 w-full h-[45px] justify-between items-center">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full h-full">
              <BiSearch className="size-5" />
              <input type="text" className="grow" placeholder="Cari Obat" />
            </label>

            <div className="bg-gray-700 rounded-lg h-full w-[60px] flex justify-center items-center">
              <RiFilter3Line className="text-gray-300 size-5" />
            </div>
          </div>

          {/* Section Carousel */}
          <div className=""></div>
        </div>

        {/* Navbar */}
        <div className="absolute bottom-5 w-full h-[80px] px-4">
          <div className="bg-gray-900 rounded-[80px] h-full flex px-14 justify-between items-center">
            <BiHomeAlt className="size-7 text-gray-600 hover:text-white transition-all" />
            <BiCart className="size-7 text-gray-600 hover:text-white transition-all" />
            <CgNotes className="size-7 text-gray-600 hover:text-white transition-all" />
            <CgProfile className="size-7 text-gray-600 hover:text-white transition-all" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
