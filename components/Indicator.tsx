import { PersonIcon } from "@/public/icons";
import React from "react";

interface Props {
  count: number;
  description: string;
  timestamp?: string;
}

const Indicator = ({ count, description, timestamp }: Props) => {
  return (
    <div className="flex flex-col justify-center items-start w-max h-28">
      <div className="flex items-center gap-0">
        <PersonIcon />
        <p className="text-lg text-black font-semibold">+{count}</p>
      </div>
      <p className="text-base text-black font-normal border-b-2 border-slate-300">
        {description} {timestamp && <span>({timestamp})</span>}
      </p>
    </div>
  );
};

export default Indicator;
