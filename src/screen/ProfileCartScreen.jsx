import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import React, { Fragment } from "react";
import MobileLayout from "../layout/MobileLayout";
import FooterButton from "../components/FooterButton";
import HeaderBack from "../components/HeaderBack";
import { BsCartPlus } from "react-icons/bs";
import Button from "../components/interface/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrices,
} from "../features/cart/cartSlice";
import { generateRandomNumber, toMoneyRP } from "../utils/static";

const ProfileCartScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector(selectCartTotalPrices);

  const handleCheckoutToWhatsapp = () => {
    if (cartItems.length === 0) return;

    const code = generateRandomNumber();
    const phoneNumber = "6282285785767";
    const message = encodeURIComponent(
      `Halo, Saya ingin membeli :\n${cartItems
        .map((product) => `${product.qty} barang - ${product.name}`)
        .join(",\n")} \n\nTotal harga Rp${totalPrice}\nKode Transaction ${code}`
    );

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(URL, "_blank");
    navigate(`/profile/transaction/${code}`);
  };

  return (
    <>
      <MobileLayout>
        <HeaderBack onClick={() => navigate(-1)} title={"Keranjang"} />

        <div className="w-full flex flex-col h-full mt-4 gap-y-3">
          {cartItems.length === 0 && (
            <div className="w-full flex justify-center h-full items-center">
              <p>Kamu belum memilih produk</p>
            </div>
          )}
          {cartItems?.map((data, index) => (
            <Fragment key={index}>
              {/* Cart */}
              <div className="h-fit flex flex-row w-full gap-x-4 border-b-[1px] pb-3 relative">
                <div className="size-24 flex overflow-hidden rounded-lg">
                  <img
                    src={data?.image[0]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-y-1 justify-center">
                  <h1 className="text-[15px] w-[80%] text-gray-700">
                    {data?.name}
                  </h1>
                  <h1 className="text-[14px] text-gray-500">
                    Rp{toMoneyRP(data.price)}
                  </h1>
                </div>

                {/* Button Plus */}
                <div className="absolute right-3 bottom-2 flex flex-row gap-x-2 items-center">
                  <AiFillMinusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
                  <p className="text-gray-600">1</p>
                  <AiFillPlusSquare className="text-gray-500 size-6 hover:text-gray-800 transition-all" />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <FooterButton>
          <div className="flex flex-col">
            <h1 className="text-[12px] text-gray-400">Total Harga</h1>
            <h1 className="font-bold">Rp{toMoneyRP(totalPrice)}</h1>
          </div>

          <Button
            label={"Pesan Obat"}
            onClick={handleCheckoutToWhatsapp}
            icon={<BsCartPlus className="size-4.5 mb-0.5" />}
          />
        </FooterButton>
      </MobileLayout>
    </>
  );
};

export default ProfileCartScreen;
