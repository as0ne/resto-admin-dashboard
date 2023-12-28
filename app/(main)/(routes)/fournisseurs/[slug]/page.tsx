"use client";

import { profilPic } from "@/public/images";
import Button from "./Button";
import { BackIcon, DeleteIcon, SendMessageIcon } from "@/public/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import GroupButton from "./GroupButton";
import InfoBox from "./InfoBox";

const DetailPage = ({ params: { id } }: { params: { id: number } }) => {
  const supplier = {
    id: id,
  };

  const router = useRouter();
  return (
    <div className="w-full bg-sky-100 text-[12px] lg:text-base px-2 lg:px-0">
      <div className="w-full flex items-center px-6 lg:px-8">
        <button
          className="w-full flex items-center gap-2 lg:hidden"
          onClick={() => router.back()}
        >
          <BackIcon />
          <p className="font-semibold whitespace-nowrap text-base">
            Liste des fournisseurs
          </p>
        </button>
        <div className="w-full ml-auto lg:max-w-[400px] flex flex-row-reverse lg:flex-row items-center gap-6">
          <Button
            label="Supprimer"
            icon={<DeleteIcon />}
            color="bg-orange-700"
          />
          <Button
            label="Envoyer message"
            color="bg-teal-800"
            icon={<SendMessageIcon />}
          />
        </div>
      </div>

      <div className="w-full">
        <div></div>
        <GroupButton />

        <div className="lg:max-w-3xl mx-auto mt-8 rounded-md bg-white flex items-start gap-8 p-4 lg:max-h-[calc(100vh-300px)] overflow-y-auto">
          <Image
            priority
            src={profilPic}
            alt="User picture."
            width={90}
            height={90}
            className="hidden lg:flex rounded-lg"
          />
          <div className="w-4/5">
            <InfoBox label="Nom d'utilisateur" value="Achibest" />
            <InfoBox label="Nom" value="Mohammed" />
            <InfoBox label="Prénom" value="Abdourahman" />
            <InfoBox label="Téléphone" value="+212 6 12 34 56 78" />
            <InfoBox label="Email" value="achibest_admin@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
