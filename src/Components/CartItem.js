import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContextProvider";
const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  //desctrutring the product
  const { id, title, image, price, amount } = product;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200   font-light">
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

            <div className="text-xl cursor-pointer">
              <IoMdClose
                onClick={() => removeItem(product.id)}
                className="text-gray-500 hover:text-red-500 transition"
              ></IoMdClose>
            </div>
          </div>
          <div className="flex items-center gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 p-2  max-w-[100px] h-full border text-primary font-mediumitems-center">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                {" "}
                <IoMdRemove></IoMdRemove>
              </div>
              <div className="flex justify-center h-full items-center px-2">
                {" "}
                {amount}{" "}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                {" "}
                <IoMdAdd></IoMdAdd>
              </div>
            </div>
            <div className="flex  justify-between w-full">
              <div className="mr-3">X</div>
              <div className="flex-1">{price} €</div>
              <div className="mr-3">=</div>
              <div className="flex-1"> {amount * price} €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
