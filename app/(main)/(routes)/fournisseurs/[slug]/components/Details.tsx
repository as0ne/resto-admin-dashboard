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
    <div className="w-full h-full overflow-y-auto lg:mr-24 mt-20 lg:mt-0 z-10 lg:z-0 ">
      {details.map((detail, idx) => (
        <InfoBox key={idx} label={detail.label} value={detail.value} />
      ))}
    </div>
  );
};

export default Details;
