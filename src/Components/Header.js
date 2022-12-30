import React, { useContext, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { BsBag } from "react-icons/bs";
import Logo from "./../img/logo2.png";
import { CartContext } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, cart } = useContext(CartContext);

  return (
    <header className={`${isActive ? "bg-blue-50 p-4" : "bg-red-200 p-4"}`}>
      <div className="container mx-auto flex justify-between items-center h-full w-full">
        <div>
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="" className="w-12 h-12" />
          </Link>
        </div>
        <span
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />{" "}
          <div className="absolute bg-red-800 text-white rounded-full text-[12px] -right-0 -bottom-2 flex justify-center items-center w-[14px] h-[14 px]">
            {cart.length}
          </div>
        </span>
      </div>
    </header>
  );
};

export default Header;
