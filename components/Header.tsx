"use client";

import { MenuIcon, SearchIcon } from "@/public/icons";
import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <div className="flex items-center gap-8 flex-1">
        <button
          className="flex items-center"
          onClick={() => alert("Menu appear")}
        >
          <MenuIcon
            fill="#14b8a6"
            className="bg-white rounded-md w-12 h-12 lg:hidden"
          />
        </button>
        <Avatar />
      </div>

      <div className="lg:w-[400px] flex items-center gap-2 bg-white rounded-md">
        <SearchIcon
          className="w-12 h-12 lg:w-8 lg:h-8 rounded-md bg-white p-1"
          fill="#14b8a6"
        />
        <input
          type="text"
          className="lg:flex w-4/5 outline-none text-slate-500 text-base font-normal p-2 hidden"
        />
      </div>
    </div>
  );
};

export default Header;
