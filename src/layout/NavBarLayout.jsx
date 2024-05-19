import React from "react";
import { BiCart, BiHomeAlt } from "react-icons/bi";
import { CgNotes, CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavBarLayout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let location = useLocation();
  let loc = location.pathname;

  let activeStyle =
    "size-7 text-white hover:text-white transition-all active:scale-90";
  let pathStyle =
    "size-7 text-gray-600 hover:text-white transition-all active:scale-90";
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white fixed overflow-scroll">
      <div className="w-[100dvw] max-w-[428px] h-screen flex flex-col justify-between items-center px-[20px] pt-8">
        <Outlet />
        {/* Navbar */}
        <div className="fixed bottom-5 w-[400px] h-[65px] px-7 z-30">
          <div className="bg-gray-900 rounded-[80px] h-full w-full flex gap-x-3 px-[1.5rem] justify-between items-center">
            <div className="flex flex-row gap-x-12 w-full justify-center">
              <Link to={"/"}>
                <BiHomeAlt
                  className={`${loc === "/" ? activeStyle : pathStyle}`}
                />
              </Link>
              <Link to={"/profile/cart"}>
                <div className="relative">
                  <BiCart
                    className={`${
                      loc === "/profile/cart" ? activeStyle : pathStyle
                    }`}
                  />
                  {cartItems?.length > 0 && (
                    <div className="size-4 rounded-full bg-red-500 absolute -right-2 -top-1 flex justify-center items-center text-white text-[9px]">
                      {cartItems?.length}
                    </div>
                  )}
                </div>
              </Link>
              <Link to={"/order"}>
                <CgNotes
                  className={`${loc === "/order" ? activeStyle : pathStyle}`}
                />
              </Link>
              <Link to={"/profile"}>
                <CgProfile
                  className={`${loc === "/profile" ? activeStyle : pathStyle}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLayout;
