import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="p-3  flex items-center gap-1 " to={"/"}>
      <img src="/img/Youtube_logo.png" alt="" className="h-5 w-7" />
      <h1 className="text-lg tracking-wider	logo-title whitespace-nowrap ">Jhael YouTube</h1>
    </Link>
  );
};

export default Logo;
