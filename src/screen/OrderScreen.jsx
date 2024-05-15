import React from "react";
import MobileLayout from "../layout/MobileLayout";
import HeaderBack from "../components/HeaderBack";

const OrderScreen = () => {
  return (
    <>
      <MobileLayout>
        <HeaderBack title={"Order Berhasil"} backButton={false} />
        <div className="w-full h-fit flex flex-col absolute top-24 px-[20px]">
          <div className="bg-gray-500 px-4 py-6 flex justify-center items-center">
            <p>1</p>
          </div>
        </div>
      </MobileLayout>
    </>
  );
};

export default OrderScreen;
