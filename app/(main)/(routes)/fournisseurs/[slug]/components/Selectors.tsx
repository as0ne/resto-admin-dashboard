const Selectors = () => {
  return (
    <div className="lg:max-w-2xl mx-auto mb-6 flex items-center text-base justify-center overflow-x-auto gap-4 lg:px-2">
      <button className="bg-white w-full rounded-md p-2 whitespace-nowrap">
        Informations Admin
      </button>

      <button className="bg-white w-full rounded-md p-2 whitespace-nowrap">
        Informations Entreprise
      </button>

      <button className="bg-white w-full rounded-md p-2 whitespace-nowrap">
        Liste des utilisateurs
      </button>
    </div>
  );
};

export default Selectors;
