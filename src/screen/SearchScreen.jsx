import React, { useEffect, useState } from "react";
import HeaderBack from "../components/HeaderBack";
import { BiSearch } from "react-icons/bi";
import CardProduct from "../components/CardProduct";
import { useNavigate, useSearchParams } from "react-router-dom";
import { product } from "../db/product.json";

const SearchScreen = () => {
  const [data, setData] = useState();
  const [nameObat, setNameObat] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let name = searchParams.get("produk");
  let category = searchParams.get("kategori");

  useEffect(() => {
    let results = [];

    if (name) {
      results = product.filter((data) =>
        data?.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (category) {
      results = [
        ...results,
        ...product.filter((data) =>
          data?.category.toLowerCase().includes(category.toLowerCase())
        ),
      ];
    }

    setData(results);
  }, [searchParams, product]);

  const handleOnChange = (element) => {
    const { name, value } = element.target;
    setNameObat(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ produk: nameObat });
  };

  return (
    <>
      <div>
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-white fixed overflow-scroll">
          <div className="w-[100dvw] max-w-[428px] h-[100dvh] flex flex-col items-center px-[20px] pt-8 relative">
            <HeaderBack onClick={() => navigate("/")} title={"Cari Obat"} />

            {/* Section Search Bar */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-x-2 w-full justify-between items-center pt-4 mb-5"
            >
              <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white w-full h-[50px]">
                <BiSearch className="size-5 text-gray-500" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Cari Obat Kamu"
                  defaultValue={name}
                  onChange={handleOnChange}
                />
              </label>
            </form>

            {/* Section Card Product */}
            {data?.length === 0 && (
              <div className="w-full">
                <p className="text-center w-full flex justify-center">
                  Produk belum hadir
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 w-full h-full pb-[15%]">
              {data?.map((data, index) => (
                <CardProduct key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
