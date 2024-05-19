import { BsCartPlus } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import HeaderBack from "../components/HeaderBack";
import FooterButton from "../components/FooterButton";
import MobileLayout from "../layout/MobileLayout";
import { useNavigate, useParams } from "react-router-dom";
import { product } from "../db/product.json";
import { toMoneyRP } from "../utils/static";

const Product = () => {
  const [dataProduct, setDataProduct] = useState();
  const [showImage, setShowImage] = useState(0);
  const { slug } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    product.forEach((data) => {
      // console.log(data);
      if (data.slug === slug) {
        setDataProduct(data);
      }
    });
  }, [slug]);

  // console.log(showImage);

  return (
    <>
      <MobileLayout>
        <HeaderBack onClick={() => navigate(-1)} title={"Detail Produk"} />

        {/* Body of Description */}
        <div className="fixed w-full h-[100dvh] top-0 -z-10 justify-start items-center flex flex-col">
          {/* Top of Picture */}
          <div className="flex flex-col w-full h-[60%] relative">
            <img
              src={dataProduct?.image[showImage]}
              alt=""
              className="object-cover w-full h-full -z-10"
            />

            <div className="absolute flex flex-row gap-x-3 w-full h-[80px] bottom-7 justify-center items-center">
              {dataProduct?.image.map((image, index) => (
                <div
                  key={index}
                  className="size-14 bg-gray-400 rounded-lg overflow-hidden z-40 "
                  onClick={() => setShowImage(index)}
                >
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full hover:bg-red-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full h-[40%] flex flex-col p-[30px] border-gray-500 overflow-auto">
            <div className="flex flex-row w-full h-[40px] justify-between items-center">
              <h1 className="font-bold text-[18px] w-[60%]">
                {dataProduct?.name}
              </h1>
              <h1 className="text-[14px] text-gray-500">
                Kategori {dataProduct?.category}
              </h1>
            </div>

            {/* divider */}
            <div className="border-b-[1px] border-gray-200 mb-4 pt-2"></div>

            <div className="h-[300px]">
              <h1 className=" text-gray-800 text-[13px] font-bold">
                Deskripsi Produk
              </h1>
              <p className="text-[12px] leading-6 mt-3 text-gray-500">
                {dataProduct?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Add to Cart Section */}
        <FooterButton>
          <div className="flex flex-col">
            <h1 className="text-[12px] text-gray-400">Harga</h1>
            <h1 className="font-bold">Rp{toMoneyRP(dataProduct?.price)}</h1>
          </div>

          {/* Button Add to Cart */}
          <div className="bg-gray-800 flex justify-center items-center gap-x-2 px-5 py-2 text-white rounded-xl">
            <BsCartPlus className="size-4.5 mb-0.5" />
            <h1>Add to Cart</h1>
          </div>
        </FooterButton>
      </MobileLayout>
    </>
  );
};

export default Product;
