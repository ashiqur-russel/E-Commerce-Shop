import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContextProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white top-0 h-full fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw]  duration-300 z-20 px-4 md:px-[35px] lg:px-[35px] overflow-scroll`}
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
      <div className="flex flex-col gap-y-2 h-[400px] md:h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden">
        {cart.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <span className="p-2 uppercase font-semibold mr-2">Total:</span>{" "}
              <span className="mr-2 font-bold">
                {parseFloat(totalPrice).toFixed(2)}
              </span>{" "}
              €
            </div>

            <div className="py-4 mx-2  bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl cursor-pointer hover:bg-red-600">
              <FiTrash2 onClick={clearCart}></FiTrash2>
            </div>
          </div>
        </div>
      )}
      <div>
        <Link
          to={"/"}
          className=" bg-gray-400 flex p-4 justify-center items-center text-primary w-full font-medium mb-2"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className=" bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
