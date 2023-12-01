import React from "react";
import { logo } from "@/public/images";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    /*<div className="w-full h-screen flex items-center gap-4">
      <div className="w-[500px] h-full bg-teal-500 py-10 px-1">
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
            Conditions d&apos;utilisateurs
          </Link>
        </div>

        <p className="text-base text-white">
          2023 Crée par CODINGART. Tous droits réservés
        </p>
      </div>
      <div className="h-screen flex flex-col items-center">
        <Image width={350} height={350} src={logo} alt="logo" className="p-8" />
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
              id="username"
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
              id="password"
            />
          </div>
          <div className="w-[500px] p-2 flex items-center justify-between">
            <div className="p-2 rounded-sm">
              <input type="checkbox" name="remember" />
              <label
                htmlFor="remember"
                className="w-full outline-none p-2 text-base text-black font-medium"
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
    */
    <div className="bg-white w-screen h-screen flex flex-col justify-between">
      <header className="w-full bg-teal-500 p-8  lg:hidden">
        <h2 className="text-lg text-white font-bold text-center mb-4">
          Bienvenue à l&apos;application
        </h2>
        <h2 className="text-lg text-orange-500 font-bold text-center mb-4">
          RESTOMARKETS
        </h2>
        <p className="text-base text-white text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui atque
          asperiores eligendi harum nam sed.
        </p>
      </header>
      <main className="max-w-full lg:h-full bg-white flex flex-col lg:flex-row items-center gap-8">
        <div className="hidden lg:w-[650px] lg:h-full bg-teal-500 lg:flex flex-col items-start justify-around px-8">
          <div className="w-full flex flex-col gap-8">
            <h2 className="md:text-white text-lg font-bold">
              Bienvenue à l&apos;application
            </h2>
            <h2 className="md:text-orange-500 text-lg font-bold">
              RESTOMARKETS
            </h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Link
              href="#"
              className="w-full text-base text-white text-left underline"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="#"
              className="w-full text-base text-white underline text-left"
            >
              Conditions d&apos;utilisateurs
            </Link>
          </div>
          <p className="text-base text-white text-left">
            2023 Crée par CODINGART. Tous droits réservés
          </p>
        </div>
        <div className="w-full flex flex-col items-center mb-8">
          <Image
            width={350}
            height={350}
            src={logo}
            alt="The logo."
            priority
            className="p-10"
          />
          <form className="w-full flex flex-col items-center">
            <div className="w-3/4 p-2 rounded-sm flex flex-col">
              <label
                htmlFor="username"
                className="text-base text-black font-medium"
              >
                Nom d&apos;utilisateur
              </label>
              <input
                className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
                type="text"
                id="username"
              />
            </div>
            <div className="w-3/4 p-2 rounded-sm flex flex-col">
              <label
                htmlFor="password"
                className="text-base text-black font-medium"
              >
                Mot de passe
              </label>
              <input
                className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
                type="password"
                id="password"
              />
            </div>
            <div className="w-3/4 p-2 flex items-center justify-between">
              <div className="p-2 rounded-sm">
                <input type="checkbox" name="remember" />
                <label
                  htmlFor="remember"
                  className="w-full outline-none p-2 text-base text-black font-medium"
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
              className="bg-orange-500 w-64 p-4 text-center text-base text-white font-medium mt-4"
            >
              Se connecter
            </button>
          </form>
        </div>
      </main>
      <footer className="max-w-full bg-teal-500 flex flex-col items-center gap-8 lg:hidden p-8">
        <div className="w-full flex items-center justify-center">
          <Link
            href="#"
            className="w-full text-base text-white text-center underline"
          >
            Politique de confidentialité
          </Link>

          <Link
            href="#"
            className="w-full text-base text-white underline text-center"
          >
            Conditions d&apos;utilisateurs
          </Link>
        </div>
        <p className="text-base text-white text-center">
          2023 Crée par CODINGART. Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Login;
