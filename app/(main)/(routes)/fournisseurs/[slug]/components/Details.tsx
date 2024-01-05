import React from "react";
import InfoBox from "./InfoBox";

interface Info {
  label: string;
  value: string;
}

interface Props {
  details: Info[];
}

const Details = ({ details }: Props) => {
  return (
    <div className="h-[calc(100vh-500px)] lg:max-h-[calc(500px)] lg:w-full lg:mr-24 overflow-y-auto mt-20 lg:mt-0 z-10 lg:z-0 mx-auto">
      {details.map((detail, idx) => (
        <InfoBox key={idx} label={detail.label} value={detail.value} />
      ))}
    </div>
  );
};

export default Details;
