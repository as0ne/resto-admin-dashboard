"use client";

import Button from "@/components/Button";
import { BackIcon, DeleteIcon, SendMessageIcon } from "@/public/icons";
import { profilPic } from "@/public/images";
import Image from "next/image";
import React from "react";

const DetailPage = () => {
  return (
    <div className="w-full bg-sky-100">
      <div className="w-full flex items-center justify-between px-8">
        <button className="w-full flex items-center gap-1">
          <BackIcon />
          <p className="text-[12px] lg:text-base font-semibold">
            Liste des fournisseurs
          </p>
        </button>
        <div className="w-full flex items-center gap-6 justify-end text-white font-semibold">
          <button className="flex items-center gap-2 bg-teal-800 text-white text-base font-semibold rounded-md lg:p-1">
            <SendMessageIcon className="h-11 w-11 lg:w-8 lg:h-8" />
            <p className="hidden lg:block">Envoyer un message</p>
          </button>
          <button className="lg:w-[185px] flex items-center gap-2 bg-orange-700 text-white text-base font-semibold rounded-md lg:p-1">
            <DeleteIcon className="h-11 w-11 lg:w-8 lg:h-8" />
            <p className="hidden lg:block">Supprimer</p>
          </button>
        </div>
      </div>
      <div className="w-full lg:max-w-[600px] mx-auto overflow-x-auto flex items-center gap-8 text-base mt-8 px-1">
        <button className="bg-white w-full py-2 rounded-md focus:bg-green-200">
          Informations Admin
        </button>

        <button className="bg-white w-full py-2 rounded-md focus:bg-green-200">
          Informations Entreprise
        </button>

        <button className="bg-white w-full py-2 rounded-md focus:bg-green-200">
          Liste des utilisateurs
        </button>
      </div>

      <div className="w-full lg:max-w-[600px] mx-auto mt-8 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-lg p-4 text-[12px] lg:text-base font-bold text-black px-2">
        <Image
          src={profilPic}
          alt="User picture"
          width={80}
          height={80}
          priority
          className="rounded-xl absolute z-40 top-[390px] right-[150px] lg:hidden"
        />
        <div className="w-full mt-20 space-y-8 pb-8">
          <div className="w-full flex items-center gap-4 border-b-[1px]">
            <div className="w-[120px] flex items-center justify-between">
              <p>Nom d&apos;utilisateur</p>
              <p>:</p>
            </div>
            <p className="text-green-500 font-semibold">Achibest</p>
          </div>

          <div className="w-full flex items-center gap-4 border-b-[1px]">
            <div className="w-[120px] flex items-center justify-between">
              <p>Nom</p>
              <p>:</p>
            </div>
            <p className="text-green-500 font-semibold">Mohammed</p>
          </div>

          <div className="w-full flex items-center gap-4 border-b-[1px]">
            <div className="w-[120px] flex items-center justify-between">
              <p>Prénom</p>
              <p>:</p>
            </div>
            <p className="text-green-500 font-semibold">Abdorahman</p>
          </div>

          <div className="w-full flex items-center gap-4 border-b-[1px]">
            <div className="w-[120px] flex items-center justify-between">
              <p>Téléphone</p>
              <p>:</p>
            </div>
            <p className="text-green-500 font-semibold">+212 6 12 34 56 78</p>
          </div>

          <div className="w-full flex items-center gap-4 border-b-[1px]">
            <div className="w-[135px] flex items-center justify-between">
              <p>Email</p>
              <p>:</p>
            </div>
            <p className="text-green-500 font-semibold">
              achibestadmin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
