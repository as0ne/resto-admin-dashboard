import AddCategory from "@/components/AddCategory";
import { AddIcon, EditIcon } from "@/public/icons";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
} from "@/public/images";
import Image from "next/image";
import React from "react";

const CategoriesPage = () => {
  const items = [
    { name: "Laitier", img: cat1 },
    { name: "Conserve", img: cat2 },
    { name: "Fruit", img: cat3 },
    { name: "Légume", img: cat4 },
    { name: "Vache", img: cat5 },
    { name: "Poulet", img: cat6 },
    { name: "Poisson", img: cat7 },
    { name: "Charcutterie", img: cat8 },
  ];

  return (
    <div className="w-full h-[calc(100%-128px)] bg-sky-100 px-8">
      <div className="w-[400px] h-10 flex  justify-between items-center ml-auto">
        <button className="w-36 flex items-center gap-2 bg-orange-400 text-white text-base font-semibold rounded-md">
          <EditIcon />
          Modifier
        </button>
        <AddCategory />
      </div>
      <div className="w-full h-[calc(100%-40px)] overflow-y-auto mt-8 grid md:grid-cols-4 gap-14 p-4">
        {items.map((item) => (
          <div
            className="bg-slate-100 rounded-lg h-40 flex flex-col justify-center items-center"
            key={item.name}
          >
            <Image src={item.img} alt={`${item.name} image`} />
            <p>{item.name}</p>
          </div>
        ))}

        {items.map((item) => (
          <div
            className="bg-slate-100 rounded-lg h-48 flex flex-col justify-center items-center"
            key={item.name}
          >
            <Image src={item.img} alt={`${item.name} image`} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
