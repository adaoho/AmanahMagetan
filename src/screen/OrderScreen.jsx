import React from "react";
import MobileLayout from "../layout/MobileLayout";
import HeaderBack from "../components/HeaderBack";

const OrderScreen = () => {
  return (
    <>
      <MobileLayout>
        <HeaderBack title={"Order Berhasil"} backButton={false} />
      </MobileLayout>
    </>
  );
};

export default OrderScreen;
