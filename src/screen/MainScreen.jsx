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
import React, { Fragment, useState } from "react";
import Button from "../components/interface/Button";
import CardProduct from "../components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isObjectEmpty } from "../utils/static";
import { product } from "../db/product.json";

const MainScreen = () => {
  const userData = useSelector((state) => state.user.userData);
  const [nameObat, setNameObat] = useState("");
  let navigate = useNavigate();

  const onLogin = () => {
    if (isObjectEmpty(userData)) {
      navigate("/login");
    }
  };

  const handleOnChange = (element) => {
    const { name, value } = element.target;
    setNameObat({ ...nameObat, [name]: value });
  };

  return (
    <>
      <div className=" w-full h-full flex justify-start items-start bg-white flex-col gap-y-6">
        {/* Section Header */}
        <div className="flex flex-row w-full justify-between items-center">
          {/* Profile */}
          <div className="flex flex-col">
            <h1 className="text-[14px]">Selamat Datang</h1>
            <div
              onClick={onLogin}
              className="flex flex-row gap-x-1 justify-center items-center"
            >
              <HiUserCircle className="text-gray-800 size-5" />
              <h1 className="text-gray-800">
                {isObjectEmpty(userData)
                  ? "Apotek Amanah Magetan"
                  : userData?.fullname}
              </h1>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search?produk=${nameObat.produk}`);
              }}
            >
              <input
                autoComplete="off"
                onChange={handleOnChange}
                name="produk"
                type="text"
                className="grow"
                placeholder="Cari Obat Kamu"
              />
            </form>
          </label>

          <div
            onClick={() => navigate("/filter")}
            className="bg-gray-700 rounded-lg h-full w-[60px] flex justify-center items-center"
          >
            <RiFilter3Line className="text-gray-300 size-5" />
          </div>
        </div>

        {/* Section Carousel */}
        <div className="w-full h-[140px] rounded-lg flex flex-col relative">
          <Swiper
            style={{
              "--swiper-pagination-right": "20px",
              "--swiper-pagination-left": "auto",
              "--swiper-pagination-top": "auto",
              "--swiper-pagination-bottom": "12px",
              "--swiper-pagination-color": "#636363",
              "--swiper-pagination-bullet-inactive-color": "#e6e6e6",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "3px",
            }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            initialSlide={1}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex relative w-full h-full rounded-xl overflow-hidden">
                <img src="/sample/test_med_photo.jpg" className="grayscale" />
                <div className="z-10 absolute bottom-0 left-7 gap-y-2 flex flex-col h-full justify-center">
                  <h1 className="font-bold">Jellybee</h1>
                  <p className="text-[12px] w-[70%] text-gray-800">
                    Kandungan vitamin yang mudah dicerna
                  </p>
                  <Button
                    label={"Jelajahi"}
                    className={"h-[20px] text-[10px] w-fit"}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex relative w-full h-full rounded-xl overflow-hidden">
                <img src="/sample/test_med_photo.jpg" className="grayscale" />
                <div className="z-10 absolute bottom-0 left-7 gap-y-2 flex flex-col h-full justify-center">
                  <h1 className="font-bold">Multivitamin</h1>
                  <p className="text-[12px] w-[70%] text-gray-800">
                    Kandungan vitamin yang mudah dicerna
                  </p>
                  <Button
                    label={"Jelajahi"}
                    className={"h-[20px] text-[10px] w-fit"}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex relative w-full h-full rounded-xl overflow-hidden">
                <img src="/sample/test_med_photo.jpg" className="grayscale" />
                <div className="z-10 absolute bottom-0 left-7 gap-y-2 flex flex-col h-full justify-center">
                  <h1 className="font-bold">Multivitamin</h1>
                  <p className="text-[12px] w-[70%] text-gray-800">
                    Kandungan vitamin yang mudah dicerna
                  </p>
                  <Button
                    label={"Jelajahi"}
                    className={"h-[20px] text-[10px] w-fit"}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Section Kategori */}
        <div className="flex flex-col gap-y-5">
          <h1 className="text-gray-800">Kategori</h1>
          <div className="flex flex-row gap-5 w-full">
            {/* One Category */}
            <div
              onClick={() => navigate(`/search?kategori=kesehatan`)}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <GiHealthNormal className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Kesehatan</h1>
            </div>
            {/* One Category */}
            <div
              onClick={() => navigate(`/search?kategori=ibudanbayi`)}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <MdOutlineBabyChangingStation className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Ibu & Bayi</h1>
            </div>
            {/* One Category */}
            <div
              onClick={() => navigate(`/search?kategori=herbal`)}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
              <div className="bg-gray-100 size-[70px] rounded-full flex justify-center items-center">
                <GiMedicinePills className="text-gray-700 size-6" />
              </div>
              <h1 className="text-gray-800 text-[12px]">Herbal</h1>
            </div>
            {/* One Category */}
            <div
              onClick={() => navigate(`/search?kategori=p3k`)}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
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
        <div className="grid grid-cols-2 gap-5 w-full h-[calc(100%+100em)] pb-[30%]">
          {product.map((data, index) => (
            <Fragment key={index}>
              <CardProduct data={data} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainScreen;
