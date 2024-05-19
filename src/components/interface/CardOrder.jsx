import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";

const CardOrder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <div className="h-fit flex flex-row w-full gap-x-4 border-b-[1px] pb-4 relative">
        <div className="size-24 flex overflow-hidden rounded-lg">
          <img
            src="/sample/test_med_photo.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-y-1 justify-between">
          <div className="flex flex-wrap w-[200px] h-fit">
            <h1 className="text-[14px] text-gray-700">
              Jellybee Multivitamin + Panadol Cold + Panadol ...
            </h1>
          </div>
          <div className="flex flex-col text-[12px] text-gray-500">
            <h1>Harga Total</h1>
            <h1 className="text-[14px] text-gray-600">Rp 120.000</h1>
          </div>
        </div>

        {/* Button Plus */}
        <div className="absolute right-1 bottom-2 flex flex-col items-end text-[11px] text-gray-400">
          <p>31 Maret 2024</p>
          <p>Order: 13456</p>
        </div>
      </div>
    </>
  );
};

export default CardOrder;
