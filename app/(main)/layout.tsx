import SideBarNav from "@/components/SideBarNav";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentDate = new Date();
  let [day, month] = currentDate
    .toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .split(" ");

  month = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <div className="h-full w-full lg:flex items-center justify-between bg-white overflow-hidden">
      <SideBarNav />
      <main className="w-full lg:w-[calc(100vw-250px)] h-full bg-sky-100 shrink-0">
        <div className="w-full">
          <h1 className="hidden lg:flex justify-end items-center lg:bg-white p-4">
            Aujourd&apos;hui:{" "}
            <span className="text-teal-500 text-base">{`${day} ${month}`}</span>
          </h1>
          <Header />
        </div>
        {children}
      </main>
    </div>
  );
}
