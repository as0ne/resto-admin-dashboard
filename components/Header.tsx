import { SearchIcon } from "@/public/icons";
import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-8">
      <Avatar />
      <div className="flex items-center justify-between w-[400px] bg-white h-10 rounded-xl">
        <SearchIcon />
        <input
          type="text"
          className="w-[calc(100%-32px)] outline-none text-slate-500 text-base font-normal"
        />
      </div>
    </div>
  );
};

export default Header;
