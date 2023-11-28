"use client";

import { AddIcon } from "@/public/icons";
import { useRouter } from "next/navigation";
import React from "react";

const AddCategory = () => {
  return (
    <button className="w-36 flex items-center gap-2 bg-teal-700 text-white text-base font-semibold rounded-md">
      <AddIcon />
      Ajouter
    </button>
  );
};

export default AddCategory;
