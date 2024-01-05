"use client";

import { achibest, profilPic } from "@/public/images";
import Image from "next/image";
import PageHeader from "./components/Header";
import Selectors from "./components/Selectors";
import Details from "./components/Details";
import { useState } from "react";

const DetailPage = () => {
  const [showAdminInfo, setShowAdminInfo] = useState(true);
  const [showClientInfo, setShowClientInfo] = useState(false);
  const [showUsersList, setShowUsersList] = useState(false);

  const adminDetails = [
    { label: "Nom d'utilisateur", value: "Achibest" },
    { label: "Nom", value: "Mohammed" },
    { label: "Prénom", value: "abdorahman" },
    { label: "Téléphone", value: "+212 6 12 34 56 78" },
    { label: "Email", value: "achibest_admin@gmail.com" },
  ];

  const clientDetails = [
    { label: "Nom de l'entreprise", value: "Achibest" },
    { label: "ICE", value: "1234567891012" },
    {
      label: "Secteur D'activité",
      value: "Vent des produits alimentaires",
    },
    { label: "Adresse", value: "+212 6 12 34 56 78" },
  ];
  return (
    <div className="w-full bg-sky-100 px-1 text-[13px] sm:max-lg:text-base lg:px-8 overflow-hidden">
      <PageHeader />
      <div>
        <div className="hidden max-w-2xl mx-auto lg:flex items-center gap-4 text-base font-bold mb-6">
          <Image
            src={achibest}
            alt="Client"
            height={100}
            width={100}
            className="rounded-full ring-1 ring-yellow-200"
          />
          <p>Achibest</p>
        </div>
        <Selectors />

        <div className="w-full lg:max-w-2xl mx-auto shadow-md lg:shadow-none relative lg:static lg:rounded-md bg-white flex flex-col lg:flex-row items-center lg:items-start lg:gap-14 lg:justify-around mt-16 lg:mt-0 px-4 py-4">
          <Image
            src={profilPic}
            alt="Profile picture."
            height={95}
            width={95}
            className="rounded-3xl absolute z-20 -top-10 lg:hidden"
          />
          <Image
            src={profilPic}
            alt="Picture"
            height={80}
            width={80}
            className="rounded-md hidden lg:block"
          />
          {/*<Details details={adminDetails} />*/}
          {showAdminInfo && <Details details={adminDetails} />}
          {showClientInfo && <Details details={clientDetails} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
