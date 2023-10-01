import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div
      className=" min-w-[12rem] max-w-[40rem] items-center relative rounded-full  focus-within:outline-none 
    focus:outline-1 mt-1 outline-coldGray900 outline-1  outline w-full p-0.5  flex"
    >
      <input
        type="text"
        placeholder="Buscar"
        onFocus={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
        className={`w-[87.7%] bg-inherit border-none h-full pl-11 p-2 text-md   rounded-l-full group focus:outline-blue-800 focus:border-none focus:outline-1 outline-none`}
      />
      <div
        className={`${
          activeSearch ? "block" : "hidden"
        } absolute left-0 ml-4 transition-all`}
      >
        <AiOutlineSearch className="text-xl outline-none" />
      </div>
      <div
        className="bg-zinc-900 hover:cursor-pointer right-0 h-[2.56rem] rounded-r-full  w-[12%] 
      absolute flex items-center outline outline-coldGray900 outline-[0.01rem] justify-center group-hover:p-10"
        onClick={() => {
          alert("hola");
        }}
      >
        <AiOutlineSearch className="text-xl outline-none" />
      </div>
    </div>
  );
};

export default SearchBar;
