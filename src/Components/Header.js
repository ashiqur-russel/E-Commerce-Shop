import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="bg-red-200">
      <div>Header</div>
      <span
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className="text-2xl" />
      </span>
    </div>
  );
};

export default Header;
