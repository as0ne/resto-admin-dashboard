"use client";

import React, { useRef } from "react";
import { logo } from "@/public/images";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const { push } = useRouter();
  const nameRef = useRef<HTMLInputElement | any>("");
  const passwordRef = useRef<HTMLInputElement | any>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(nameRef.current);
    console.log(passwordRef.current);

    if (nameRef.current.trim() && passwordRef.current.trim())
      push("/categories");
  };

  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between">
      <header className="w-full bg-teal-500 px-8 lg:hidden">
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
            <h2 className="md:text-white text-2xl font-bold">
              Bienvenue à l&apos;application
            </h2>
            <h2 className="md:text-orange-500 text-2xl font-bold">
              RESTOMARKETS
            </h2>
          </div>
          <div className="w-full flex flex-col items-center gap-10">
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
            2023 Crée par{" "}
            <Link target="_blank" href="https://www.codingart.io/">
              CODINGART
            </Link>
            . Tous droits réservés
          </p>
        </div>
        <div className="w-full flex flex-col items-center mb-8">
          <Image
            width={340}
            height={340}
            src={logo}
            alt="The logo."
            priority
            className="p-4 lg:p-10 mb-8"
          />
          <form
            className="w-full lg:max-w-4xl flex flex-col items-center px-4 lg:px-0"
            onSubmit={handleSubmit}
          >
            <div className="w-full lg:w-3/4 mb-12">
              <label
                htmlFor="username"
                className="text-base text-black font-medium"
              >
                Nom d&apos;utilisateur
              </label>
              <input
                ref={nameRef}
                onChange={(e) => (nameRef.current = e.target.value)}
                className="bg-slate-100 w-full p-4 outline-none text-base text-black font-medium"
                type="text"
                id="username"
                required
              />
            </div>
            <div className="w-full lg:w-3/4 mb-12">
              <label
                htmlFor="password"
                className="text-base text-black font-medium"
              >
                Mot de passe
              </label>
              <input
                ref={passwordRef}
                onChange={(e) => (passwordRef.current = e.target.value)}
                className="bg-slate-100 w-full p-4 outline-none text-base text-black font-medium"
                type="password"
                id="password"
                required
              />
            </div>
            <div className="w-full lg:w-3/4 mb-8 text-base flex items-center justify-between">
              <div className="w-full flex items-center gap-1">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="">
                  Se souvenir de moi
                </label>
              </div>
              <Link href="#" className="w-full text-slate-400">
                Mot de passe oublié ?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-orange-500 px-24 py-3 text-center text-lg text-white font-bold mt-4"
            >
              se connecter
            </button>
          </form>
        </div>
      </main>
      <footer className="max-w-full bg-teal-500 flex flex-col items-center gap-8 lg:hidden p-8 mt-6">
        <div className="w-full flex items-center justify-center">
          <Link
            href="#"
            className="w-full text-[12px] lg:text-base text-white text-center underline"
          >
            Politique de confidentialité
          </Link>

          <Link
            href="#"
            className="w-full text-[12px] lg:text-base text-white underline text-center"
          >
            Conditions d&apos;utilisateurs
          </Link>
        </div>
        <p className="text-[12px] lg:text-base text-white text-center">
          2023 Crée par CODINGART. Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Login;
