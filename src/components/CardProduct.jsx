import { AiOutlinePlus } from "react-icons/ai";
import { toMoneyRP } from "../utils/static";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../features/cart/cartSlice";

const CardProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-fit gap-y-3 relative">
      {/* Picture Square */}

      <div className="bg-gray-200 rounded-md w-full h-[167px] overflow-hidden">
        <Link to={"/product/" + data?.slug}>
          <img
            src={data?.image[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      {/* Description */}
      <Link to={"/product/" + data?.slug}>
        <div className="flex flex-row gap-x-2 justify-between text-[11px] items-end text-gray-700">
          <h1 className="text-[13px]">{data?.name}</h1>
          <h1 className="font-bold text-[14px]">Rp{toMoneyRP(data?.price)}</h1>
        </div>
      </Link>

      {/* Button Add to Cart */}
      <div
        onClick={() => {
          dispatch(addItemsToCart(data));
          navigate("/profile/cart");
          toast.success("Produk berhasil dipilih");
        }}
        className="absolute z-20 right-4 bottom-8 bg-gray-800 flex justify-center items-center size-[40px] rounded-full"
      >
        <AiOutlinePlus className="text-white" />
      </div>
    </div>
  );
};

export default CardProduct;
