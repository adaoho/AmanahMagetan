import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const HeaderBack = ({ title, onClick }) => {
  return (
    <>
      {/* Header */}
      <div className="w-full flex h-fit py-3 justify-center items-center relative bg-red-200">
        <h1 className="text-gray-600 font-bold">{title}</h1>
        <div className="absolute flex justify-center items-center px-1 py-1 border-[1px] border-gray-500 text-gray-500 rounded-full left-4">
          <BiLeftArrowAlt onClick={onClick} className="size-5" />
        </div>
      </div>
    </>
  );
};

export default HeaderBack;
