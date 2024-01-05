import React from "react";

interface Props {
  label: string;
  value: string;
}

const InfoBox = ({ label, value }: Props) => {
  return (
    <div className="text-[13.5px] lg:text-base font-semibold border-b my-2 flex items-center gap-4 px-1 py-4">
      <div className="w-[120px] flex items-center justify-between">
        <p>{label}</p>
        <p>:</p>
      </div>
      <p className="text-green-400 w-fit overflow-x-auto">{value}</p>
    </div>
  );
};

export default InfoBox;
