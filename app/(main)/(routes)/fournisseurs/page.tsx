import Indicator from "@/components/Indicator";
import {
  AddIcon,
  AddressIcon,
  BackIcon,
  MailIcon,
  PhoneIcon,
} from "@/public/icons";
import React from "react";

const Supplier = () => {
  const items = [
    {
      id: 1,
      name: "Achibest",
      address: "Essalam Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 2,
      name: "Blé Gourmet",
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 3,
      name: "Marjane",
      address: "Emi-Ouaddar",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 4,
      name: "Carrefour",
      address: "Corniche Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 6,
      name: "Marjane",
      address: "Founty Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },

    {
      id: 7,
      name: "Sodivias",
      address: "Agadir",
      mail: "mohammed@gmail.com",
      phone: "+212 66 55 44 33",
    },
  ];
  return (
    <div className="w-full px-8">
      <div className="w-full flex items-center justify-between lg:justify-end mb-6">
        <button className="flex items-center gap-1 lg:hidden">
          <BackIcon />
          <p className="text-base text-black font-normal">
            Liste des fournisseurs
          </p>
        </button>
        <button className="bg-teal-700 flex items-center rounded-md lg:p-1 gap-1">
          <AddIcon className="w-12 h-12 lg:w-8 lg:h-8" />
          <p className="hidden lg:flex text-base text-white font-bold">
            Inviter
          </p>
        </button>
      </div>

      {/** Indicators */}
      <div className="hidden lg:flex items-center justify-between">
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

      {/**List of itempliers */}
      {/** Desktop */}
      <div className="hidden lg:block w-full h-[calc(100vh-295px)] overflow-y-auto pb-10">
        <table className="w-full divide-y-[35px] divide-sky-100 table-auto">
          <thead className="w-full bg-white">
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
            {items.map((item, idx) => (
              <tr
                key={idx}
                className="w-full h-14 flex items-center justify-between bg-white px-2  mb-8"
              >
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.mail}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/** Mobile & Tablets */}
      <div className="w-full h-[calc(100vh-150px)] lg:hidden overflow-y-auto pb-14">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex flex-col items-start gap-2 rounded-xl p-2 mb-4"
          >
            <p>{item.name}</p>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-1">
                <AddressIcon />
                <p className="text-sm text-black">{item.address}</p>
              </div>
              <div className="flex items-center gap-1">
                <PhoneIcon />
                <p className="text-sm text-black">{item.phone}</p>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <MailIcon />
                <p className="text-sm text-black">{item.mail}</p>
              </div>
            </div>
          </div>
        ))}

        {items.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex flex-col items-start gap-2 rounded-xl p-2 mb-4"
          >
            <p>{item.name}</p>
            <div className="w-full flex items-center justify-around">
              <div className="flex items-center gap-1">
                <AddressIcon />
                <p className="text-sm text-black">{item.address}</p>
              </div>
              <div className="flex items-center gap-1">
                <PhoneIcon />
                <p className="text-sm text-black">{item.phone}</p>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <MailIcon />
                <p className="text-sm text-black">{item.mail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplier;
{
  /**
<button className="bg-teal-500 w-32 text-white text-lg font-semibold text-right flex items-center gap-2 rounded-md ml-auto">
        <AddIcon className="" />
        Inviter
      </button>
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
            {itempliers.map((item, idx) => (
              <tr
                //href={`/categories/${item.name}`}
                key={idx}
                className="w-full h-14 flex items-center justify-between bg-white px-2  mb-8"
              >
                <div>{item.name}</div>
                <div>{item.address}</div>
                <div>{item.mail}</div>
                <div>{item.phone}</div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>*/
}
