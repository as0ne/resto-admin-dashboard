import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import SideBarNav from "./components/SideBarNav";
import { profilPic } from "@/public/images";
import { SearchIcon } from "@/public/icons";
import Avatar from "./components/Avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome To RestoApp",
  description: "Resto App Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex items-center justify-between bg-white overflow-hidden">
          <SideBarNav />
          <main className="w-[calc(100%-250px)] h-full bg-sky-100">
            <div className="w-full">
              <h1 className="text-right bg-white p-2">
                Aujourd&apos;hui:{" "}
                <span className="text-teal-500 text-base">19 Septembre</span>
              </h1>
              <div className="flex items-center justify-between px-14">
                <Avatar />
                <form className="flex items-center justify-between w-[450px] bg-white px-2 h-10 rounded-xl">
                  <SearchIcon />
                  <input type="text" className="w-[calc(100%-34px)]" />
                </form>
              </div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
