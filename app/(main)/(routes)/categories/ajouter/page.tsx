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

{
  /*<button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-2"
      >
        <BackIcon />
        <p className="text-base text-black font-semibold">Nouvelle catégorie</p>
      </button>
      <form className="w-full h-[calc(100vh-235px)] pb-5 overflow-y-auto">
        <div className="w-3/4 flex flex-col lg:flex-row mb-12">
          <div className="w-full">
            <div className="w-full flex items-start flex-col justify-center p-2">
              <label htmlFor="ref">Référence</label>
              <input id="ref" type="text" className="w-full p-4 outline-none" />
            </div>

            <div className="w-full flex items-start flex-col justify-center p-2">
              <label htmlFor="designation">Désignation</label>
              <input
                id="designation"
                type="text"
                className="w-full p-4 outline-none"
              />
            </div>

            <div className="w-full flex items-start flex-col justify-center p-2">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                className="w-full p-4 outline-none"
              />
            </div>
          </div>
          <div className="w-80 bg-white flex flex-col justify-center items-center">
            <ImageIcon />
            <p className="text-lg text-black font-semibold">
              Télécharger une image
            </p>
            <p className="text-base text-black font-semibold">
              Taille maximale 10M
            </p>
            <p className="text-sm text-slate-200 font-semibold">
              Format: JPEG, PNG
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center p-2">
          <button
            type="submit"
            className="bg-teal-600 h-12 w-64 rounded-3xl text-white text-lg font-bold"
          >
            Ajouter
          </button>
        </div>
      </form>*/
}
