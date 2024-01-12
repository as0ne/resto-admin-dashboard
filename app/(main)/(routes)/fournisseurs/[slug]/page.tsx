"use client";

import { achibest, profilPic } from "@/public/images";
import Image from "next/image";
import PageHeader from "./components/Header";
import Details from "./components/Details";
import { useState } from "react";
import Selector from "./components/Selector";
import { ChatIcon, DeleteIcon, SeeIcon } from "@/public/icons";
import UsersList from "./components/UsersList";

const DetailPage = () => {
  const [showAdminInfo, setShowAdminInfo] = useState(true);
  const [showClientInfo, setShowClientInfo] = useState(false);
  const [showUsersList, setShowUsersList] = useState(false);
  const [adminSelectorBg, setAdminSelectorBg] = useState("bg-teal-200");
  const [clientSelectorBg, setClientSelectorBg] = useState("bg-white");
  const [usersSelectorBg, setUsersSelectorBg] = useState("bg-white");

  const selectorsColors = ["bg-white", "bg-teal-200"];

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

  const users = [
    {
      id: 1,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 2,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 3,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 4,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 5,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 6,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 7,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 8,
      name: "Mohammed",
      role: "Admin",
    },
    {
      id: 9,
      name: "Abdourahman",
      role: "Sous admin",
    },
    {
      id: 10,
      name: "Meriem",
      role: "Gérante",
    },
  ];

  return (
    <div className="w-full bg-sky-100 p-2 text-[13px] sm:max-lg:text-base lg:px-8 overflow-hidden">
      <PageHeader />
      <div className="w-full lg:max-w-3xl lg:mx-auto  ">
        <div className="hidden lg:flex items-center gap-4 text-base font-bold mb-6">
          <Image
            src={achibest}
            alt="Client"
            height={80}
            width={80}
            className="rounded-full ring-1 ring-yellow-200"
          />
          <p>Achibest</p>
        </div>
        <div className="w-full mb-6 flex items-center text-base overflow-x-auto gap-4 lg:pl-0 px-2">
          <Selector
            color={adminSelectorBg}
            onClick={() => {
              if (showAdminInfo) return;
              else {
                setShowAdminInfo(true);
                setShowClientInfo(false);
                setShowUsersList(false);

                setAdminSelectorBg(selectorsColors[1]);
                setClientSelectorBg("bg-white");
                setUsersSelectorBg("bg-white");
              }
            }}
            label="Informations Admin"
          />

          <Selector
            color={clientSelectorBg}
            onClick={() => {
              if (showClientInfo) return;
              else {
                setShowAdminInfo(false);
                setShowClientInfo(true);
                setShowUsersList(false);

                setAdminSelectorBg("bg-white");
                setClientSelectorBg(selectorsColors[1]);
                setUsersSelectorBg("bg-white");
              }
            }}
            label="Informations Entreprise"
          />

          <Selector
            color={usersSelectorBg}
            onClick={() => {
              if (showUsersList) return;
              else {
                setShowAdminInfo(false);
                setShowClientInfo(false);
                setShowUsersList(true);

                setAdminSelectorBg("bg-white");
                setClientSelectorBg("bg-white");
                setUsersSelectorBg(selectorsColors[1]);
              }
            }}
            label="Liste des utilisateurs"
          />
        </div>
        <div className="w-full h-[calc(100vh-420px)] shadow-md lg:shadow-none relative lg:static lg:rounded-md bg-white flex flex-col lg:flex-row items-center lg:items-start lg:gap-14 lg:justify-start mt-16 lg:mt-0 p-4">
          {!showUsersList && (
            <Image
              src={profilPic}
              alt="Profile picture."
              height={95}
              width={95}
              className="rounded-3xl absolute z-20 -top-10 lg:hidden"
            />
          )}
          {!showUsersList && (
            <Image
              src={profilPic}
              alt="Picture"
              height={90}
              width={90}
              className="rounded-3xl hidden lg:block"
            />
          )}

          {showAdminInfo && <Details details={adminDetails} />}
          {showClientInfo && <Details details={clientDetails} />}
          {showUsersList && <UsersList users={users} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
