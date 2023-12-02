"use client";

import { BackIcon, ImageIcon } from "@/public/icons";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-sky-100 px-8">
      <button
        className="flex items-center gap-2 mb-8"
        onClick={() => router.back()}
      >
        <BackIcon />
        <p className="text-base font-semibold text-black">Nouvelle Catégorie</p>
      </button>
      <form className="w-full flex flex-col items-center h-[calc(100vh-200px)] pb5 overflow-y-auto">
        <div className="w-full flex flex-col lg:flex-row items-center mb-12">
          <div className="w-full lg:w-3/5">
            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="ref">Référence</label>
              <input type="text" id="ref" className="w-full p-3 outline-none" />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                id="designation"
                className="w-full p-3 outline-none"
              />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="parent">Catégorie parentale</label>
              <input
                type="text"
                id="parent"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col bg-white w-52 p-2 justify-center items-center lg:ml-12">
            <ImageIcon />
            <p className="text-base text-center text-black font-semibold">
              Télécharger une image
            </p>
            <p className="text-sm text-center text-black font-normal">
              Taille maximale 10M
            </p>
            <p className="text-xs text-center text-slate-200 font-normal">
              Format JPEG, PNG
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white text-lg font-bold p-3 w-64 rounded-3xl"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
