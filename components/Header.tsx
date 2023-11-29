import { SearchIcon } from "@/public/icons";
import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <Avatar />
      <div className="w-[300px] flex items-center justify-between bg-white h-10 rounded-xl">
        <SearchIcon className="w-9" />
        <input
          type="text"
          className="w-[calc(100%-36px)] outline-none text-slate-500 text-base font-normal px-2"
        />
      </div>
    </div>
  );
};

export default Header;
