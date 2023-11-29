import SideBarNav from "@/components/SideBarNav";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-white`}>
      <div className="h-screen w-screen flex items-center justify-between bg-white overflow-hidden">
        <SideBarNav />
        <main className="w-[calc(100%-250px)] h-full bg-sky-100 shrink-0 ml-[1px]">
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
    </div>
  );
}
