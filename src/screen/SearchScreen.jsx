import React from "react";
import HeaderBack from "../components/HeaderBack";
import { BiSearch } from "react-icons/bi";
import CardProduct from "../components/CardProduct";

const SearchScreen = () => {
  return (
    <>
      <div>
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-white fixed overflow-scroll">
          <div className="w-[100dvw] max-w-[428px] h-[100dvh] flex flex-col items-center px-[20px] pt-8 relative">
            <HeaderBack title={"Cari Obat"} />

            {/* Section Search Bar */}
            <div className="flex flex-row gap-x-2 w-full justify-between items-center pt-4 mb-5">
              <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white w-full h-[50px]">
                <BiSearch className="size-5 text-gray-500" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Cari Obat Kamu"
                />
              </label>
            </div>

            {/* Section Card Product */}
            <div className="grid grid-cols-2 gap-4 w-full h-full pb-[15%]">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
