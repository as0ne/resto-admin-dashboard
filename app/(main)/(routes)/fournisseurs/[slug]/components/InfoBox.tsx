import React from "react";

const InfoBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex mb-10 lg:mb-4 p-2 border-b items-center gap-4 font-semibold whitespace-nowrap">
      <p className="w-[160px] flex items-center justify-between">
        <span>{label}</span>
        <span>:</span>
      </p>
      <p className="text-teal-500">{value}</p>
    </div>
  );
};

export default InfoBox;
