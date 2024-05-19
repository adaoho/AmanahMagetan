import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import React from "react";
import MobileLayout from "../layout/MobileLayout";
import { useSelector } from "react-redux";
import { isObjectEmpty } from "../utils/static";

const ProfileScreen = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <>
      <MobileLayout isNavbar={true}>
        <div className="flex flex-col w-full h-full items-center justify-start">
          <h1 className="mb-7">Profile Saya</h1>

          {/* User Photo */}
          <div className="bg-gray-500 rounded-full size-24 flex justify-center items-center relative mb-6">
            <div className="size-24 overflow-hidden rounded-full">
              <img
                src="/sample/test_med_photo.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0">
              <AiOutlineEdit className="bg-gray-600 size-7 text-white rounded-full px-1.5 py-1.5 hover:scale-105 active:scale-90 hover:bg-gray-800 transition-all" />
            </div>
          </div>

          <div className="flex flex-col w-full justify-start items-start text-[13px] gap-y-4">
            <div className="flex flex-col gap-y-1 w-full h-[70px]">
              <h1>Nama Lengkap</h1>
              <input
                type="text"
                placeholder="Ketik nama kamu .."
                defaultValue={isObjectEmpty(userData) ? "" : userData?.fullname}
                className="input border-gray-400 w-full text-[13px]"
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full h-[70px] relative">
              <h1>Nomor Telefon</h1>
              <input
                type="text"
                placeholder="Ketik nomor telefon kamu .."
                defaultValue={
                  isObjectEmpty(userData)
                    ? ""
                    : userData?.phoneNumber?.slice(3, 14)
                }
                className="input border-gray-400 w-full text-[13px] pl-14"
              />
              <div className="bg-gray-500 text-white absolute px-2.5 left-0 bottom-0 h-[66%] rounded-l-lg flex justify-center items-center">
                +62
              </div>
            </div>

            <div className="flex flex-row w-full gap-x-3">
              <div className="flex flex-col gap-y-1 w-2/3 h-[70px] relative">
                <h1>Tanggal Lahir</h1>
                <input
                  type="date"
                  placeholder="Ketik nama kamu .."
                  className="input border-gray-400 w-full text-[13px]"
                />
                {/* <div className="absolute right-3 bottom-3.5">
                  <AiOutlineCalendar className="size-5" />
                </div> */}
              </div>
              <div className="flex flex-col gap-y-1 w-1/3 h-[70px]">
                <h1>Umur</h1>
                <input
                  type="text"
                  placeholder="10 y.o"
                  className="input border-gray-400 w-full text-[13px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1 w-full h-[70px]">
              <h1>Asal Daerah</h1>
              <input
                type="text"
                placeholder="Ketik nama kamu .."
                className="input border-gray-400 w-full text-[13px]"
              />
            </div>

            <div className="bg-gray-500 rounded-lg w-full flex justify-start items-center px-3 py-2 text-white mt-3 relative">
              <h1 className="pl-2">Berikan Feedback Kamu?</h1>
              {/* <IoIosInformationCircleOutline className="absolute size-4 left-2 bottom-[11px]" /> */}
              <BsFillArrowUpRightCircleFill className="absolute size-4 right-2 bottom-[11px]" />
            </div>
          </div>
        </div>
      </MobileLayout>
    </>
  );
};

export default ProfileScreen;
