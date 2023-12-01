"use client";

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
import { usePathname } from "next/navigation";

const SideBarNav = () => {
  const path = usePathname();
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
    <aside className="hidden lg:w-[350px] lg:h-full lg:flex flex-col items-center p-[2px]">
      <Link href="/">
        <Image
          width={400}
          height={400}
          src={logo}
          alt="logo"
          className="flex items-center justify-center mb-8"
        />
      </Link>
      <nav className="w-full divide-y-[1px] overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center bg-${
              path === link.href ? "sky-100" : "white"
            } gap-4 h-14`}
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
