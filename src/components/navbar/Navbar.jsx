import React from "react";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { PiHouseThin } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleOpenMenu = () => setToggle((prev) => !prev);

  return (
    <div className=" pr-3.5 pt-0.5 flex gap-0 fixed w-full bg-coldGray950 top-0 justify-between pb-1 z-30   ">
      <div className="w-full">
        <SideFeed />
        <div className="w-full  relative flex">
          <div className=" sm:w-3/12 flex items-center gap-1 text-gray-50 bg-cold950 fixed left-5">
            <MenuComponent handleOpenMenu={handleOpenMenu} />
          </div>
          <div className="h-12 z-0 "></div>
          <div className="hidden sm:ml-60 w-8/12 sm:w-6/12 items-center sm:flex justify-center">
            <SearchBar />
          </div>
          <div className="w-0 lg:w-4/12"> </div>

          {toggle && (
            <div
              className={`bg-[#141414b7] w-full min-h-screen top-0 transition-all fixed z-40`}
            ></div>
          )}
          <div
            className={`bg-coldGray950  w-full sm:w-2/6 min-w-[10rem] lg:w-60  left-0 top-0 min-h-screen ${
              toggle ? "left-0" : "left-[-100%]"
            } duration-100 fixed transition-all z-50  pt-0 shadow-md`}
          >
            <div className="w-full flex gap-1 pt-0.5 pl-3 h-9 my-2 ml-2">
              <MenuComponent handleOpenMenu={handleOpenMenu} />
            </div>
            <button className="hover:bg-coldGray900   flex gap-3 items-center rounded-md w-10/12 mx-4 h-11 ">
              <div className="pl-2 flex items-center w-fit gap-5 justify-between">
                <PiHouseThin className="text-2xl" />
                <h5 className="text-sm">New</h5>
              </div>
            </button>

            <button className="hover:bg-coldGray900   flex gap-3 items-center rounded-md w-10/12 mx-4 h-11 ">
              <div className="pl-2 flex items-center w-fit gap-5 justify-between">
                <MdSubscriptions className="text-2xl" />
                <h5 className="text-xs">Principal</h5>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MenuComponent = ({ handleOpenMenu }) => {
  return (
    <>
      <button
        className="hover:bg-coldGray900 p-2 rounded-full ease-in duration-300"
        onClick={handleOpenMenu}
      >
        <AiOutlineMenu className="text-lg " />
      </button>
      <Logo />
    </>
  );
};

const SideFeed = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="hidden lg:flex w-16  h-screen fixed left-0 top-12   flex-col gap-2 ">
      {SideFeedArray.map((option) => (
        <button className="hover:bg-coldGray900 px-9  flex flex-col justify-center gap-1 items-center h-20 rounded-md">
          {option.icon}
          <h5 className="text-[0.65rem]">{option.label}</h5>
        </button>
      ))}
    </div>
  );
};

const SideFeedArray = [
  {
    icon: <PiHouseThin className="text-2xl" />,
    label: "Home",
  },
  {
    icon: <MdSubscriptions className="text-2xl" />,
    label: "Subscriptions",
  },
];
