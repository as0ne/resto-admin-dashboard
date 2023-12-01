"use client";

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
      className={`lg:w-full flex items-center gap-2 ${color} text-white text-base font-semibold rounded-md lg:p-1`}
    >
      <Icon className="w-12 h-12 lg:w-8 lg:h-8" />
      <p className="hidden lg:flex">{label}</p>
    </button>
  );
};

export default AddCategory;
