import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarNav from "../components/SideBarNav";
import Header from "../components/Header";

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
          <main className="w-[calc(100%-250px)] h-full bg-sky-100 shrink-0">
            <div className="w-full h-32">
              <h1 className="text-right bg-white p-2">
                Aujourd&apos;hui:{" "}
                <span className="text-teal-500 text-base">19 Septembre</span>
              </h1>
              <Header />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
