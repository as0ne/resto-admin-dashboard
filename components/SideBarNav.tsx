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
import { useRouter } from "next/navigation";

const SideBarNav = () => {
  const path = usePathname();
  const router = useRouter();
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
      href: "/account",
      label: "Paramètres du compte",
      icon: <AccountSettingsIcon />,
    },
  ];

  const logOut = () => {};

  return (
    <aside className="hidden lg:w-[350px] lg:h-full lg:flex flex-col items-center lg:py-4">
      <Link href="/" className="p-4">
        <Image
          width={300}
          height={300}
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
            className={`flex hover:bg-sky-100 items-center bg-${
              path.startsWith(link.href) ? "sky-100" : "white"
            } gap-4 p-4`}
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </nav>
      <button
        onClick={() => router.push("/")}
        className="flex items-center justify-start border-t border-slate-300 w-full gap-4 p-4 bg-white"
      >
        <LogOutIcon />
        <p>Déconnexion</p>
      </button>
    </aside>
  );
};

export default SideBarNav;
