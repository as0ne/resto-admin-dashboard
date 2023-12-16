"use client";

import Button from "@/components/Button";
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
    <div className="w-full px-1 lg:px-0">
      <div className="w-full flex justify-start flex-row-reverse lg:flex-row lg:w-[400px] gap-14 lg:ml-auto px-7 lg:px-8">
        <Button
          Icon={EditIcon}
          label="Modifier"
          color="bg-orange-400"
          path="/categories"
        />

        <Button
          Icon={AddIcon}
          label="Ajouter"
          color="bg-teal-700"
          path="/categories/ajouter"
        />
      </div>
      <div className="w-full max-h-[500px] pb-24 lg:pb-[120px] overflow-y-auto gap-10 p-4 bg-white lg:bg-sky-100 rounded-md lg:gap-14 mt-8 grid grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div
            className="bg-slate-100 rounded-lg py-8 flex flex-col justify-center items-center shadow-md shadow-gray-200"
            key={item.name}
          >
            <Image src={item.img} alt={`${item.name} image`} />
            <p>{item.name}</p>
          </div>
        ))}

        {items.map((item) => (
          <div
            className="bg-slate-100 rounded-lg py-8 flex flex-col justify-center items-center shadow-md shadow-gray-200"
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
