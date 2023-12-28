import React from "react";

interface Props {
  label: string;
  value: string;
}

const InfoBox = ({ label, value }: Props) => {
  return (
    <div className="w-full flex items-center gap-10 mb-8 border-b text-base font-semibold pb-4">
      <div className="w-[140px] flex items-center justify-between">
        <p>{label}</p>
        <p>:</p>
      </div>
      <p className="text-green-400">{value}</p>
    </div>
  );
};

export default InfoBox;
