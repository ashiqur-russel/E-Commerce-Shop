import React, { useState, useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Products = ({ product }) => {
  const { id, image, category, title, price } = product;
  return (
    <div key={product.id}>
      <div className="border border-[#e4e4e4] h-[300px] m-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h[160px] group-hover:scale-110 transitiion duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-0 -right-11 group-hover:right-0  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 translate-all duration-300">
          <button>
            <div className="flex justify-center items-center  bg-red-300 text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={"/"}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
