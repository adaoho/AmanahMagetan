import React from "react";
import { BsCartPlus } from "react-icons/bs";

const Button = ({ onClick, btnType, label, className, icon }) => {
  return (
    <>
      {/* Button Add to Cart */}
      <button
        onClick={onClick}
        type={btnType ? btnType : "submit"}
        className={`bg-gray-800 flex justify-center items-center gap-x-2 px-5 py-2 text-white rounded-xl ${className} active:scale-90 transition-all active:bg-gray-700`}
      >
        {icon}
        <h1>{label}</h1>
      </button>
    </>
  );
};

export default Button;
