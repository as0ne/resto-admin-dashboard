import React, { ReactNode } from "react";

interface Props {
  label: string;
  icon: ReactNode;
  color?: string;
}

const Button = ({ label, icon, color }: Props) => {
  return (
    <button
      className={`lg:w-full ${color} rounded-md text-white font-semibold flex items-center justify-center lg:justify-start w-11 h-11 lg:w-8 lg:h-8 px-2 py-1`}
    >
      {icon}
      <p className="hidden lg:block">{label}</p>
    </button>
  );
};

export default Button;
