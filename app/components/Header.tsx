import { SearchIcon } from "@/public/icons";
import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-14 py-6">
      <Avatar />
      <div className="flex items-center justify-between w-[400px] bg-white px-2 h-10 rounded-xl">
        <SearchIcon />
        <input
          type="text"
          className="w-[calc(100%-34px)] outline-none text-slate-500 p-2 text-base font-normal"
        />
      </div>
    </div>
  );
};

export default Header;
