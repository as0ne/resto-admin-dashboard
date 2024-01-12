import Indicator from "@/components/Indicator";
import {
  AddIcon,
  AddressIcon,
  BackIcon,
  MailIcon,
  PhoneIcon,
} from "@/public/icons";
import { achibest, blegourmet, carrefour, marjane } from "@/public/images";
import Link from "next/link";
import Image from "next/image";
import SupplierList from "./SupplierList";

const Supplier = () => {
  const items = [
    {
      id: 1,
      name: "Achibest",
      logo: achibest,
      address: "Essalam Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 2,
      name: "Blé Gourmet",
      logo: blegourmet,
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 3,
      name: "Marjane",
      logo: marjane,
      address: "Emi-Ouaddar",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 4,
      name: "Carrefour",
      logo: carrefour,
      address: "Corniche Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 6,
      name: "Marjane",
      logo: marjane,
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full px-8 mb-4">
        <button className="lg:w-[150px] p-2 px-[10px] lg:p-[4px] flex items-center gap-2 bg-teal-700 w-fit ml-auto text-white text-base font-semibold rounded-md">
          <AddIcon />
          <p className="hidden lg:flex text-base text-white font-bold">
            Inviter
          </p>
        </button>
      </div>

      {/** Indicators */}
      <div className="hidden lg:flex items-center justify-between px-8">
        <Indicator
          count={5}
          description="Nouveaux Fournisseurs"
          timestamp="Cette Semaine"
        />

        <Indicator
          count={12}
          description="Nouveaux Fournisseurs"
          timestamp="Ce mois"
        />

        <Indicator
          count={5}
          description="Fournisseurs en attente"
          timestamp=""
        />
      </div>

      {/** Desktop */}
      <div className="hidden lg:block w-full h-[calc(100vh-295px)] overflow-y-auto pb-10 px-8">
        <SupplierList suppliers={items} />
      </div>

      {/** Mobile & Tablets */}
      <div className="w-full max-h-[calc(100vh-300px)] lg:hidden overflow-y-auto pb-5 px-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex flex-col items-start gap-2 rounded-xl p-2 mb-4"
          >
            <div className="flex items-center gap-2">
              <Image
                src={item.logo}
                alt="restaurant"
                width={54}
                height={54}
                className="rounded-full border-[1px] border-orange-200"
              />
              <p>
                <Link href={`/fournisseurs/${item.id}`}>{item.name}</Link>
              </p>
            </div>
            <div className="w-full flex items-center gap-2 text-[9px] text-black">
              <div className="w-full flex items-center gap-1">
                <AddressIcon />
                <p>{item.address}</p>
              </div>
              <div className="w-full flex items-center gap-1">
                <PhoneIcon />
                <p>{item.phone}</p>
              </div>
              <div className="w-full flex items-center gap-1">
                <MailIcon />
                <p>{item.mail}</p>
              </div>
            </div>
          </div>
        ))}

        {items.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex flex-col items-start gap-2 rounded-xl p-2 mb-4"
          >
            <div className="flex items-center gap-2 bg-white">
              <Image
                src={item.logo}
                alt="restaurant"
                width={54}
                height={54}
                className="rounded-full border-[1px] border-orange-200"
              />
              <p>
                <Link href={`/fournisseurs/${item.id}`}>{item.name}</Link>
              </p>
            </div>
            <div className="w-full flex items-center justify-between text-[10px] text-black">
              <div className="w-full flex items-center">
                <AddressIcon />
                <p>{item.address}</p>
              </div>
              <div className="w-full flex items-center">
                <PhoneIcon />
                <p>{item.phone}</p>
              </div>
              <div className="w-full flex items-center">
                <MailIcon />
                <p>{item.mail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplier;
