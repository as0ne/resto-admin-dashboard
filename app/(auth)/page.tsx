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
            width={350}
            height={350}
            src={logo}
            alt="The logo."
            priority
            className="p-10"
          />
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-3/4 p-2 rounded-sm flex flex-col">
              <label
                htmlFor="username"
                className="text-base text-black font-medium"
              >
                Nom d&apos;utilisateur
              </label>
              <input
                ref={nameRef}
                onChange={(e) => (nameRef.current = e.target.value)}
                className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
                type="text"
                id="username"
                required
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
                ref={passwordRef}
                onChange={(e) => (passwordRef.current = e.target.value)}
                className="bg-slate-50 h-14 w-full outline-none p-2 text-base text-black font-medium"
                type="password"
                id="password"
                required
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
