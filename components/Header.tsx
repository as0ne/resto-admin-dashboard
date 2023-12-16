"use client";

import { MenuIcon, SearchIcon } from "@/public/icons";
import Image from "next/image";
import Avatar from "./Avatar";
import { logo } from "@/public/images";

const Header = () => {
  return (
    <div className="w-full mb-8 lg:mb-5">
      <div className="w-full flex items-center justify-center bg-white mb-8 py-8 lg:hidden">
        <Image width={300} height={300} src={logo} alt="Logo" />
      </div>
      <div className="w-full flex items-center justify-between bg-sky-100 px-8 lg:mt-5">
        <div className="flex items-center gap-8 flex-1">
          <button
            className="flex items-center lg:hidden"
            onClick={() => alert("Menu appear")}
          >
            <MenuIcon
              fill="#14b8a6"
              className="bg-white rounded-xl w-12 h-12"
            />
          </button>
          <Avatar />
        </div>

        <div className="lg:w-[420px] lg:px-4 lg:py-1 flex items-center gap-2 lg:bg-white lg:rounded-2xl">
          <SearchIcon
            className="w-12 h-12 lg:w-8 lg:h-8 bg-white rounded-md lg:rounded-none"
            fill="#64748b"
          />
          <input
            type="text"
            placeholder="Rechercher dans catégorie"
            className="hidden lg:block w-4/5 outline-none text-slate-500 text-base font-normal py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
