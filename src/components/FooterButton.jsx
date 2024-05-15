import { BsCartPlus } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const FooterButton = ({ children }) => {
  return (
    <>
      <div className="absolute bottom-0 w-full h-[80px] bg-gray-50 flex justify-between items-center px-[30px] rounded-t-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        {children}
      </div>
    </>
  );
};

export default FooterButton;
