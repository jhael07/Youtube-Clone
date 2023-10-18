import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { context } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(context);
  const [searchInput, setSearchInput] = useState(searchTerm);

  return (
    <div
      className=" min-w-[12rem] max-w-[40rem] items-center relative rounded-full  active:outline-none 
    focus:outline-1 mt-1 outline-coldGray900 outline-1  outline w-full p-0.5  flex"
    >
      <input
        type="text"
        placeholder="Buscar"
        defaultValue={searchTerm}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className={`w-[87.7%] bg-inherit border-none h-full pl-11 p-2 text-md   rounded-l-full group active:outline-blue-800 focus:border-none focus:outline-1 outline-none`}
      />
      <div className={` absolute left-0 ml-4 transition-all`}>
        <AiOutlineSearch className="text-xl outline-none" />
      </div>
      <Link
        to={"/search"}
        className="bg-zinc-900 hover:cursor-pointer right-0 h-[2.56rem] rounded-r-full  w-[12%] 
      absolute flex items-center outline outline-coldGray900 outline-[0.01rem] justify-center group-hover:p-10"
        onClick={() => {
          setSearchTerm(searchInput);
        }}
      >
        <AiOutlineSearch className="text-xl outline-none" />
      </Link>
    </div>
  );
};

export default SearchBar;
