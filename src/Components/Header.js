import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { BsBag } from "react-icons/bs";
import Logo from "./../img/logo2.png";
import { CartContext } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none  "
      } fixed w-full z-10  transition-all mb-[20px] `}
    >
      <div className="container h-[90px] mx-auto px-10  xl:px-20  flex justify-between items-center  w-full ">
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
          <div className="absolute bg-red-800 text-white rounded-full text-[12px] -right-0 -bottom-2 flex justify-center items-center w-[14px] h-[14px]">
            {itemAmount}
          </div>
        </span>
      </div>
    </header>
  );
};

export default Header;
