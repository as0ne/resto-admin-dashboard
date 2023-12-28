import React from "react";

const Selector = ({ label }: { label: string }) => {
  return (
    <button className="bg-white px-4 whitespace-nowrap text-base font-normal py-2 rounded-md border-none focus:bg-teal-300">
      {label}
    </button>
  );
};

export default Selector;
