import { AiOutlinePlus } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="flex flex-col h-fit gap-y-3 relative">
      {/* Picture Square */}
      <div className="bg-gray-200 rounded-md w-full h-[167px] overflow-hidden">
        <img
          src="/sample/test_med_photo.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Description */}
      <div className="flex flex-row gap-x-2 justify-between text-[11px] items-end text-gray-700">
        <h1 className="font-light text-[13px]">Jellybee Multivitamin</h1>
        <h1 className="font-bold text-[14px]">Rp120.000</h1>
      </div>

      {/* Button Add to Cart */}
      <div className="absolute right-4 bottom-8 bg-gray-800 flex justify-center items-center size-[40px] rounded-full">
        <AiOutlinePlus className="text-white" />
      </div>
    </div>
  );
};

export default CardProduct;
