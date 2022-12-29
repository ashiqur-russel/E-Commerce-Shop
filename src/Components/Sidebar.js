import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContextProvider";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white top-0 h-full fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw] duration-300 z-20 px-4 md:px-[35px] lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-xm font-semibold">
          {" "}
          Shopping Bag {cart.length}
        </div>
        <div
          onClick={() => handleClose(!isOpen)}
          className="cursor-pointer w-8 h-8 flex justify-center items-center text-2xl"
        >
          <IoMdArrowForward />
        </div>{" "}
      </div>
      <div>Cart Item</div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product}></CartItem>
      ))}
    </div>
  );
};

export default Sidebar;
