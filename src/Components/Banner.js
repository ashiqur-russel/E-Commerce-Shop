import React from "react";
import { Link } from "react-router-dom";
import Model from "../img/model3.png";

const Banner = () => {
  return (
    <section className="py-16 bg-rose-100 h-[600px]">
      <div className="container mx-auto flex items-center justify-around h-full relative">
        <div className="flex-1 flex-col gap-10">
          <div className="font-semibold flex flex-row items-center uppercase ">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-[70px] w-full leading-[1.1] mb-4 font-light">
            SUMMER DEAL STYLISH <br />{" "}
            <span className="font-semibold">WOMENS</span>
          </h1>

          <Link
            to={"/"}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Discover More
            </span>
          </Link>
        </div>
        <div className=" hidden lg:block absolute -bottom-16 -right-3">
          <img className="w-[300px] h-[auto]" src={Model} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
