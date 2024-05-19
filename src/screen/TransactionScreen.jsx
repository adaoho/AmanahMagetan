import React, { useState } from "react";
import MobileLayout from "../layout/MobileLayout";
import HeaderBack from "../components/HeaderBack";
import CardOrder from "../components/interface/CardOrder";

const TransactionScreen = () => {
  const [selected, setSelected] = useState(2);

  return (
    <>
      <MobileLayout isNavbar={true}>
        <HeaderBack title={"Order Saya"} backButton={false} />
        <div className="w-full h-fit flex flex-col absolute top-[6%] px-[20px] justify-center items-center">
          {/* Tab Content */}
          <div role="tablist" className="tabs w-full border-b-[1px]">
            <a
              onClick={() => {
                setSelected(1);
              }}
              role="tab"
              className={`tab ${
                selected == 1 ? `border-b-2 border-gray-800` : `text-gray-400`
              }`}
            >
              Aktif
            </a>
            <a
              onClick={() => {
                setSelected(2);
              }}
              role="tab"
              className={`tab ${
                selected == 2 ? `border-b-2 border-gray-800` : `text-gray-400`
              }`}
            >
              Selesai
            </a>
            <a
              onClick={() => {
                setSelected(3);
              }}
              role="tab"
              className={`tab ${
                selected == 3 ? `border-b-2 border-gray-800` : `text-gray-400`
              }`}
            >
              Gagal
            </a>
          </div>

          <div className="w-full flex flex-col mt-6 gap-y-4 pb-[40%] overflow-auto">
            <CardOrder />
            <CardOrder />
            <CardOrder />
          </div>
        </div>
      </MobileLayout>
    </>
  );
};

export default TransactionScreen;
