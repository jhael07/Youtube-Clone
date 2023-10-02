import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Tags from "./Tags";

const TagsHomeComponent = ({ selectedCategory, setSelectedCategory }) => {
  const handleScroll = (position) => {
    const slideRight = document.querySelector("#slider")!;
    if (position === "right")
      slideRight.scrollLeft = slideRight.scrollLeft + 200;
    else slideRight.scrollLeft = slideRight.scrollLeft - 200;
  };

  return (
    <div className=" scroll-smooth sticky top-12 z-0 bg-coldGray950 backdrop-blur-md ">
      <div
        onClick={() => handleScroll("left")}
        className="bg-gradient-to-r from-coldGray950 to-[#1b1818ac] hover:cursor-pointer 
      backdrop-blur-lg p-1 2xl:hidden left-2 absolute h-8 w-8 top-7 "
      >
        <AiOutlineLeft className="text-white  text-xl " />
      </div>
      <div className=" w-full max-w-96   flex  pt-2 items-center m-auto justify-center px-10 scroll-smooth  ">
        <Tags setter={setSelectedCategory} selected={selectedCategory} />
      </div>
      <div
        onClick={() => handleScroll("right")}
        id="right"
        className="bg-gradient-to-l from-coldGray950 to-[#1b1818ac] hover:cursor-pointer  
      backdrop-blur-sm p-1 absolute 2xl:hidden  h-8 w-8 top-7 right-2"
      >
        <AiOutlineRight className="text-white text-xl" />
      </div>
    </div>
  );
};

export default TagsHomeComponent;
