import React from "react";

const MobileLayout = ({ children, isNavbar }) => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center fixed overflow-scroll bg-white">
        <div
          className={`w-[100dvw] max-w-[428px] h-[100dvh] flex flex-col justify-between items-center px-[20px] ${
            isNavbar ? `pt-0` : "pt-8"
          }  relative`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
