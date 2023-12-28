"use client";
import InputField from "@/components/InputField";
import { useState } from "react";

const AccountSettings = () => {
  const [user, setUser] = useState({
    username: "Mohammed_Restomarkets",
    password: "password",
    tel: "+212 6 69 48 73 12",
    email: "mohammed.restomarkets@gmail.com",
  });
  return (
    <div className="w-full px-8 overflow-hidden">
      <h1 className="mb-8 bg-white text-xl text-red-500 font-semibold px-2">
        Mes informations
      </h1>
      <div className="mb-8 text-base text-black font-normal">
        <p>
          Ce sont les informations que nous avons actuellement sur le dossier de
          votre compte.
        </p>
        <p>
          Cliquez sur le bouton «Modifier» ci-dessous pour apporter des
          modifications à votre compte.
        </p>
      </div>
      <form className="w-full flex flex-col items-center max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-290px)] lg:text-base text-[12px] pb-5 overflow-y-auto">
        <InputField
          id="username"
          label="Nom d'utilisateur"
          type="text"
          value={user.username}
        />
        <InputField
          id="password"
          label="Mot de passe"
          type="password"
          value={user.password}
        />
        <InputField id="phone" label="Téléphone" type="tel" value={user.tel} />
        <InputField id="email" label="Email" type="email" value={user.email} />

        <div className="w-fit lg:w-3/4 flex justify-center text-base text-white font-semibold">
          <button type="submit" className="bg-teal-600 px-8 py-2 rounded-lg">
            Modifier mes informations
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
