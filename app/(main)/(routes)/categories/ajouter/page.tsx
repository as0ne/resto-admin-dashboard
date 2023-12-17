"use client";

import { BackIcon, ImageIcon } from "@/public/icons";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const router = useRouter();
  return (
    <div className="w-full px-8">
      <button
        className="flex items-center gap-2 mb-8"
        onClick={() => router.back()}
      >
        <BackIcon />
        <p className="text-base font-semibold text-black">Nouvelle Catégorie</p>
      </button>
      <form className="w-full flex flex-col justify-between items-stretch lg:items-center max-h-[calc(100vh-380px)] lg:max-h-full pb-5 overflow-y-auto">
        <div className="w-full flex flex-col lg:flex-row items-center mb-16">
          <div className="w-full lg:w-3/5">
            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="ref">Référence</label>
              <input
                required
                type="text"
                id="ref"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="designation">Designation</label>
              <input
                required
                type="text"
                id="designation"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="parent">Catégorie parentale</label>
              <input
                required
                type="text"
                id="parent"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col bg-white p-2 justify-center items-center mt-16 lg:mt-0">
            <ImageIcon />
            <input
              type="file"
              name=""
              id="image"
              className="w-[0.1px] h-[0.1px] -z-[1px] opacity-0 absolute overflow-hidden"
            />
            <label
              htmlFor="image"
              className="text-base text-center text-black font-semibold inline-block cursor-pointer"
            >
              Télécharger une image
            </label>
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
          className="bg-teal-500 text-white text-lg font-bold p-3 lg:w-64 rounded-3xl"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
