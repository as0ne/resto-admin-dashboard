"use client";

import { BackIcon, ImageIcon } from "@/public/icons";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const AddCategory = () => {
  const referenceRef = useRef<HTMLInputElement | any>("");
  const designationRef = useRef<HTMLInputElement | any>("");
  const parentRef = useRef<HTMLInputElement | any>("");

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const reference = referenceRef.current.trim();
    const designation = designationRef.current.trim();
    const parent = parentRef.current.trim();

    if (reference && designation && parent) {
      let data = { reference, designation, parent };
      console.log(data);
      router.push("/categories");
    } else console.log("Errors!");
  };
  return (
    <div className="w-full px-8">
      <button
        className="flex items-center gap-2 mb-8"
        onClick={() => router.back()}
      >
        <BackIcon />
        <p className="text-base font-semibold text-black">Nouvelle Catégorie</p>
      </button>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-between items-center lg:items-center max-h-[calc(100vh-300px)] lg:max-h-full pb-4 overflow-y-auto"
      >
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch mb-16 lg:mb-0">
          <div className="w-full lg:w-3/5 mb-16">
            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="ref">Référence</label>
              <input
                required
                ref={referenceRef}
                onChange={(event) =>
                  (referenceRef.current = event.target.value)
                }
                type="text"
                id="ref"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="designation">Designation</label>
              <input
                required
                ref={designationRef}
                onChange={(e) => (designationRef.current = e.target.value)}
                type="text"
                id="designation"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>

            <div className="w-full flex flex-col items-start mb-4">
              <label htmlFor="parent">Catégorie parentale</label>
              <input
                required
                ref={parentRef}
                onChange={(e) => (parentRef.current = e.target.value)}
                type="text"
                id="parent"
                className="w-full lg:w-4/5 p-3 outline-none"
              />
            </div>
          </div>
          <div className="w-60 text-black text-center text-base flex flex-col bg-white py-2 justify-center items-center lg:mt-0 lg:mb-16">
            <ImageIcon />
            <input
              type="file"
              name=""
              id="image"
              className="w-[0.1px] h-[0.1px] -z-[1px] opacity-0 absolute overflow-hidden"
            />
            <label htmlFor="image" className="font-semibold cursor-pointer">
              Télécharger une image
            </label>
            <p className="text-sm font-normal">Taille maximale 10M</p>
            <p className="text-xs text-slate-200 font-normal">
              Format JPEG, PNG
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-60 py-3 bg-teal-500 text-white text-lg font-bold lg:w-64 rounded-3xl"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
