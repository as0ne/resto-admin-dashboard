import React from "react";
import Image from "next/image";
import { logo } from "@/public/images";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center gap-28">
      <div className="bg-teal-500 h-screen w-[500px] py-10 px-1">
        <h2 className="text-white text-lg font-bold mb-2">
          Bienvenue à l&apos;application
        </h2>
        <h2 className="text-orange-500 text-lg font-bold mb-8">RESTOMARKETS</h2>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui atque
          asperiores eligendi harum nam sed.
        </p>

        <div className="flex flex-col items-start gap-8 mt-24 mb-40">
          <Link href="#" className="underline text-base text-white">
            Politique de confidentialité
          </Link>

          <Link href="#" className="underline text-base text-white">
            Conditions d’utilisateurs
          </Link>
        </div>

        <div>
          <p className="text-base text-white">
            2023 Crée par CODINGART. Tous droits réservés
          </p>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center">
        <Image width={100} src={logo} alt="logo" />
        <form className="flex flex-col justify-center items-center">
          <div className="h-fit w-[500px] p-2 rounded-sm flex flex-col">
            <label
              htmlFor="username"
              className="text-base text-black font-medium"
            >
              Nom d&apos;utilisateur
            </label>
            <input
              className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
              type="text"
              name="username"
            />
          </div>
          <div className="h-fit w-[500px] p-2 rounded-sm flex flex-col">
            <label
              htmlFor="password"
              className="text-base text-black font-medium"
            >
              Mot de passe
            </label>
            <input
              className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
              type="password"
            />
          </div>
          <div className="w-[500px] p-2 flex items-center justify-between">
            <div className="p-2 rounded-sm">
              <input type="checkbox" name="remember" />
              <label
                htmlFor="remember"
                className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
              >
                Se souvenir de moi
              </label>
            </div>
            <Link href="#" className="text-base text-slate-300">
              Mot de passe oublié?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-orange-500 w-64 h-14 mt-10 text-center text-base text-white font-medium"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
