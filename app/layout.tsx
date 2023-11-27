import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import SideBarNav from "./components/SideBarNav";
import { avatar } from "@/public/images";

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
        <div className="h-screen bg-white w-screen overflow-hidden">
          <SideBarNav />
          <main>
            <div>
              <Image src={avatar} alt="avatar"></Image>
            </div>
            {/** TODO: Add the children */}
          </main>
        </div>
      </body>
    </html>
  );
}
