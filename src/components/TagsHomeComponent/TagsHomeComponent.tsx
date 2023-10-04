import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Tags from "../Tags";
import "./index.css";

const TagsHomeComponent = ({ selectedCategory, setSelectedCategory }) => {
  const handleScroll = (position) => {
    const slideRight = document.querySelector("#slider")!;
    if (position === "right")
      slideRight.scrollLeft = slideRight.scrollLeft + 200;
    else slideRight.scrollLeft = slideRight.scrollLeft - 200;
  };

  return (
    <div className=" mt-10  scroll-smooth sticky top-12 z-0 bg-coldGray950 backdrop-blur-md 2xl:pb-2">
      <div onClick={() => handleScroll("left")} className={"scrollLeft"}>
        <AiOutlineLeft className="text-white  text-xl " />
      </div>
      <div className=" w-full max-w-96   flex  pt-2 items-center m-auto justify-center px-10 scroll-smooth  ">
        <Tags setter={setSelectedCategory} selected={selectedCategory} />
      </div>
      <div
        onClick={() => handleScroll("right")}
        id="right"
        className={"scrollRight"}
      >
        <AiOutlineRight className="text-white text-xl" />
      </div>
    </div>
  );
};

export default TagsHomeComponent;
