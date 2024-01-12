"use client";

import { useRouter } from "next/navigation";

interface Props {
  path: string;
  label: string;
  color: string;
  Icon: any;
}

const Button = ({ path, label, Icon, color }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(path)}
      className={`lg:w-full rounded-md p-2 px-[10px] lg:p-[4px] items-center flex gap-2 ${color} text-white text-base font-semibold rounded-md lg:p-1`}
    >
      <Icon />
      <p className="hidden lg:flex">{label}</p>
    </button>
  );
};

export default Button;
