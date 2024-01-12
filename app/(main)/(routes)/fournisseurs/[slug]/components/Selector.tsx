import React from "react";

interface Props {
  color: string;
  label: string;
  onClick: () => void;
}

const Selector = ({ color, label, onClick }: Props) => {
  return (
    <button
      className={`${color} rounded-md p-2 whitespace-nowrap shrink-0`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Selector;
