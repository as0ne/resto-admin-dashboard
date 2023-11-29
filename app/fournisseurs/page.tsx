import Indicator from "@/components/Indicator";
import {
  AddIcon,
  AddressIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
} from "@/public/icons";
import Link from "next/link";
import React from "react";

const Supplier = () => {
  const suppliers = [
    {
      name: "Achibest",
      address: "Essalam Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      name: "Blé Gourmet",
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      name: "Marjane",
      address: "Emi-Ouaddar",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      name: "Carrefour",
      address: "Corniche Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      name: "Marjane",
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },
  ];
  return (
    <div className="w-full h-[calc(100vh-128px)] bg-sky-100 px-8 mt-10">
      <button className="bg-teal-500 w-32 text-white text-lg font-semibold text-right flex items-center gap-2 rounded-md ml-auto">
        <AddIcon className="" />
        Inviter
      </button>
      {/* 128px + 128px + 36px + 80px*/}
      <div className="flex items-center justify-between">
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

        <Indicator count={5} description="Fournisseurs en attente" />
      </div>
      <div className="w-full h-[calc(100vh-275px)] overflow-y-auto pb-4">
        <table className="w-full divide-y-[30px] divide-sky-100 overflow-y-auto table-auto">
          <thead className="h-6 w-full bg-white">
            <tr className="w-full flex items-center justify-between py-2">
              <th>
                <p className="text-teal-500 text-base font-normal px-2">
                  Identité de l&apos;entreprise
                </p>
              </th>

              <th>
                <div className="flex items-center gap-2 px-2">
                  <AddressIcon />
                  <p className="text-teal-500 text-base font-normal">Adresse</p>
                </div>
              </th>

              <th>
                <div className="flex items-center gap-2 px-2">
                  <MailIcon />
                  <p className="text-teal-500 text-base font-normal">Email</p>
                </div>
              </th>

              <th>
                <div className="flex items-center gap-2 px-2">
                  <PhoneIcon />
                  <p className="text-teal-500 text-base font-normal">
                    Téléphone
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((sup) => (
              <Link
                href={`/categories/${sup.name}`}
                key={sup.phone}
                className="w-full h-14 flex items-center justify-between bg-white px-2  mb-8"
              >
                <td>{sup.name}</td>
                <td>{sup.address}</td>
                <td>{sup.mail}</td>
                <td>{sup.phone}</td>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Supplier;
