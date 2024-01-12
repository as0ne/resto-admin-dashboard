import { AddressIcon, MailIcon, PhoneIcon } from "@/public/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
  address: string;
  logo: StaticImageData;
  mail: string;
  phone: string;
}

const SupplierList = ({ suppliers }: { suppliers: Item[] }) => {
  return (
    <table className="w-full divide-y-[35px] divide-sky-100 table-auto">
      <thead className="w-full bg-white">
        <tr className="w-full flex items-center justify-between py-2">
          <th>
            <p className="text-teal-500 text-base font-normal px-2">
              Identité de l&apos;entreprise
            </p>
          </th>

          <th>
            <div className="flex items-center gap-2 px-2">
              <AddressIcon />
              <p className="text-teal-500 text-base font-normal">Adresse</p>
            </div>
          </th>

          <th>
            <div className="flex items-center gap-2 px-2">
              <MailIcon />
              <p className="text-teal-500 text-base font-normal">Email</p>
            </div>
          </th>

          <th>
            <div className="flex items-center gap-2 px-2">
              <PhoneIcon />
              <p className="text-teal-500 text-base font-normal">Téléphone</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((item, idx) => (
          <tr
            key={idx}
            className="w-full h-14 flex items-center justify-between bg-white px-2  mb-8"
          >
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="block h-6 w-12" />
                <Image
                  src={item.logo}
                  width={54}
                  height={54}
                  alt="restorant logo"
                  priority
                  className="rounded-full aspect-auto border-[1px] border-orange-300"
                />
                <p>
                  <Link href={`/fournisseurs/${item.id}`}>{item.name}</Link>
                </p>
              </div>
            </td>
            <td>{item.address}</td>
            <td>{item.mail}</td>
            <td>{item.phone}</td>
          </tr>
        ))}

        {suppliers.map((item, idx) => (
          <tr
            key={idx}
            className="w-full h-14 flex items-center justify-between bg-white px-2  mb-8"
          >
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="block h-6 w-12" />
                <Image
                  src={item.logo}
                  width={54}
                  height={54}
                  alt="restorant logo"
                  priority
                  className="rounded-full aspect-auto border-[1px] border-orange-300"
                />
                <p>
                  <Link href={`/fournisseurs/${item.id}`}>{item.name}</Link>
                </p>
              </div>
            </td>
            <td>{item.address}</td>
            <td>{item.mail}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SupplierList;
