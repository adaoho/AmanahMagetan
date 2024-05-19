import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const HeaderBack = ({ title, onClick, backButton = true }) => {
  return (
    <>
      {/* Header */}
      <div className="w-full flex h-fit py-2 justify-center items-center relative">
        <h1 className="text-gray-600 font-bold">{title}</h1>
        {backButton ? (
          <>
            <div className="absolute flex justify-center items-center px-1 py-1 border-[1px] border-gray-500 text-gray-500 rounded-full left-0 active:scale-90 transition-all">
              <BiLeftArrowAlt onClick={onClick} className="size-5" />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default HeaderBack;
