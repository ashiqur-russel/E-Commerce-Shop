import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const CartItem = ({ product }) => {
  //desctrutring the product
  const { id, title, image, price, amount } = product;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          {" "}
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>{" "}
        <div className="w-full flex-col">
          <div className=" flex items-center justify-between">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>

            <IoMdClose className="text-gray-500 hover:text-red-500 transition"></IoMdClose>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
