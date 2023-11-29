"use client";

import { AddIcon } from "@/public/icons";
import { useRouter } from "next/navigation";

interface Props {
  path: string;
  label: string;
  color: "bg-teal-700" | "bg-orange-400";
  Icon: any;
}

const AddCategory = ({ path, label, Icon, color }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(path)}
      className={`w-full flex items-center gap-2 ${color} text-white text-base font-semibold rounded-md p-2`}
    >
      <Icon className="text-xl" />
      {label}
    </button>
  );
};

export default AddCategory;
