import React from "react";
import { BiCart, BiHomeAlt } from "react-icons/bi";
import { CgNotes, CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom";

const NavBarLayout = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white fixed overflow-scroll">
      <div className="w-[428px] h-screen flex flex-col justify-between items-center px-[20px] pt-8">
        <Outlet />
        {/* Navbar */}
        <div className="fixed bottom-5 w-fit h-[65px]">
          <div className="bg-gray-900 rounded-[80px] h-full w-full flex gap-x-16 px-[1.5rem] justify-between items-center">
            <BiHomeAlt className="size-7 text-gray-600 hover:text-white transition-all" />
            <BiCart className="size-7 text-gray-600 hover:text-white transition-all" />
            <CgNotes className="size-7 text-gray-600 hover:text-white transition-all" />
            <CgProfile className="size-7 text-gray-600 hover:text-white transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLayout;
