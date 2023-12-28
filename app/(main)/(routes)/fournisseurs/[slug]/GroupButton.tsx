import React from "react";
import Selector from "./Selector";

const GroupButton = () => {
  return (
    <div className="w-full lg:max-w-3xl mx-auto mt-8 rounded-md flex items-start gap-4 lg:justify-between overflow-x-auto">
      <Selector label="Informations Admin" />
      <Selector label="Informations Entreprise" />
      <Selector label="Liste des utilisateurs" />
    </div>
  );
};

export default GroupButton;
