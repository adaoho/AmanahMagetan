import { RiErrorWarningFill } from "react-icons/ri";
import React from "react";
import MobileLayout from "../layout/MobileLayout";
import HeaderBack from "../components/HeaderBack";
import FooterButton from "../components/FooterButton";
import Button from "../components/interface/Button";
import { useNavigate, useParams } from "react-router-dom";

const OrderScreen = () => {
  const navigate = useNavigate();
  const { TransId } = useParams();

  const code = TransId.split("");
  const square =
    "bg-gray-200 w-[60px] h-[66px] flex justify-center items-center text-gray-800 text-[20px] rounded-xl";
  return (
    <>
      <MobileLayout>
        <HeaderBack title={"Order Berhasil"} backButton={false} />
        <div className="w-full h-fit flex flex-col absolute top-28 px-[20px]">
          {/* Pass Code Number */}
          <div className="flex flex-row gap-x-2 justify-center items-center">
            {code?.map((data) => (
              <div className={`${square}`}>
                <p>{data}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center h-fit py-8 text-[13px] text-center">
            <p>
              Tunjukan Nomor Order ini ke Apoteker Amanah untuk mengambil obat
              yang sudah kamu pesan
            </p>
          </div>

          {/* Expired Date */}
          <div className="w-full px-[20px] border-y-[1px] border-gray-200 py-6 flex justify-center items-center">
            <div className="bg-gray-200 w-full h-fit py-2 rounded-lg px-4 flex gap-x-2 items-center">
              <RiErrorWarningFill />
              <h1 className="text-[12px]">
                Nomor Order berlaku hingga 31 Maret 2024
              </h1>
            </div>
          </div>
        </div>

        <FooterButton>
          <div
            className="w-full flex justify-center
           items-center"
          >
            <Button
              onClick={() => navigate("/order")}
              label={"Lihat Transaksi Saya"}
              className={"w-full"}
            />
          </div>
        </FooterButton>
      </MobileLayout>
    </>
  );
};

export default OrderScreen;
