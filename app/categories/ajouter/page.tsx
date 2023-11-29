import { BackIcon, ImageIcon } from "@/public/icons";
import Link from "next/link";

const AddCategory = () => {
  return (
    <div className="w-full bg-sky-100 px-14 mt-8">
      <Link href="/categories" className="flex items-center gap-2 mb-2">
        <BackIcon />
        <p className="text-base text-black font-semibold">Nouvelle catégorie</p>
      </Link>
      <form className="w-full h-full">
        <div className="w-full flex items-stretch justify-between mb-20">
          <div className="w-4/5">
            <div className="w-3/4 flex flex-col justify-center p-2">
              <label htmlFor="ref">Référence</label>
              <input id="ref" type="text" className="w-full p-2 outline-none" />
            </div>

            <div className="w-3/4 flex flex-col justify-center p-2">
              <label htmlFor="designation">Désignation</label>
              <input
                id="designation"
                type="text"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="w-3/4 flex flex-col justify-center p-2">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
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
      </form>
    </div>
  );
};

export default AddCategory;
