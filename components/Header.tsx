"use client";

import {
  AccountSettingsIcon,
  CategoryIcon,
  LogOutIcon,
  MenuIcon,
  MessageIcon,
  SearchIcon,
  SupplierIcon,
} from "@/public/icons";
import Image from "next/image";
import Avatar from "./Avatar";
import { logo } from "@/public/images";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [display, setDisplay] = useState("invisible");
  const router = useRouter();
  const links = [
    {
      href: "/categories",
      label: "Catégories",
      icon: <CategoryIcon />,
    },
    {
      href: "/fournisseurs",
      label: "Fournisseurs",
      icon: <SupplierIcon />,
    },
    {
      href: "/acheteurs",
      label: "Acheteurs",
      icon: <SupplierIcon />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <MessageIcon />,
    },
    {
      href: "/account",
      label: "Paramètres",
      icon: <AccountSettingsIcon />,
    },
  ];

  const toggleMenu = () => {
    if (!showMenu) {
      setDisplay("visible");
      setShowMenu(!showMenu);
    } else {
      setDisplay("invisible");
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="w-full mb-8 lg:mb-5">
      <div className="w-full flex items-center justify-center bg-white py-6 mb-8 lg:hidden">
        <Image width={180} height={180} src={logo} alt="Logo" />
      </div>
      <div className="w-full flex items-center justify-between bg-sky-100 px-8 lg:mt-5">
        <div className="flex items-center gap-4 flex-1 relative">
          <button className="flex items-center lg:hidden" onClick={toggleMenu}>
            <MenuIcon
              fill="#14b8a6"
              className="bg-white rounded-xl w-12 h-12 p-1"
            />
          </button>
          <Avatar />
        </div>
        <div
          className={`${display} lg:hidden flex flex-col z-50 absolute top-52 left-0 px-8`}
        >
          <nav className="flex flex-col justify-center space-y-[1px]">
            {links.map((link) => (
              <Link
                onClick={toggleMenu}
                className="bg-white p-4 rounded-xl flex items-center gap-4"
                key={link.href}
                href={link.href}
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            ))}
          </nav>
          <button
            onClick={() => router.push("/")}
            className="bg-white p-4 rounded-xl flex items-center gap-4 mt-[1px]"
          >
            <LogOutIcon />
            <p>Déconnexion</p>
          </button>
        </div>
        <div className="lg:w-[400px] lg:px-4 lg:py-1 flex items-center gap-2 lg:bg-white lg:rounded-2xl">
          <SearchIcon
            className="w-12 h-12 p-1 bg-white rounded-xl lg:hidden"
            fill="#14b8a6"
          />
          <SearchIcon
            className="hidden lg:flex w-12 h-12 lg:w-8 lg:h-8 bg-white rounded-xl lg:rounded-none"
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
