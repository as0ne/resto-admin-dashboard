import { BackIcon, SendMessageIcon, DeleteIcon } from "@/public/icons";
import { useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();
  return (
    <div className="w-full mb-6 flex items-center justify-between gap-2 px-7 lg:px-0 font-semibold text-base">
      <button
        className="flex text-base font-semibold items-center lg:hidden"
        onClick={() => router.back()}
      >
        <BackIcon />
        <p>Liste des fournisseurs</p>
      </button>
      <div className="lg:w-2/4 ml-auto flex items-center gap-5 lg:flex-row-reverse lg:justify-start">
        <button className="bg-teal-700 rounded-md p-2 px-[10px] lg:p-[4px] lg:flex items-center gap-2">
          <SendMessageIcon />
          <p className="text-white hidden lg:block">Envoyer message</p>
        </button>
        <button className="bg-red-600 rounded-md p-2 px-[10px] lg:p-[4px] lg:flex lg:w-[200px] items-center gap-2">
          <DeleteIcon fill="white" />
          <p className="text-white hidden lg:block">Supprimer</p>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
