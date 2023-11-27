import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/images";
import {
  CategoryIcon,
  SupplierIcon,
  MessageIcon,
  AccountSettingsIcon,
  LogOutIcon,
} from "@/public/icons";

const SideBarNav = () => {
  const links = [
    {
      href: "/categories",
      label: "Liste des catégories",
      icon: <CategoryIcon />,
    },
    {
      href: "/fournisseurs",
      label: "Liste des fournisseurs",
      icon: <SupplierIcon />,
    },
    {
      href: "/acheteurs",
      label: "Liste des acheteurs",
      icon: <SupplierIcon />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <MessageIcon />,
    },
    {
      href: "/settings",
      label: "Paramètres du compte",
      icon: <AccountSettingsIcon />,
    },
    {
      href: "/logout",
      label: "Déconnexion",
      icon: <LogOutIcon />,
    },
  ];

  return (
    <aside className="w-[250px] h-full flex flex-col items-center">
      <Link href="/">
        <Image
          width={350}
          src={logo}
          alt="logo"
          className="flex items-center justify-center w-80"
        />
      </Link>
      <nav className="w-full divide-y-[1px] overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 bg-white mb-1 h-14"
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBarNav;
