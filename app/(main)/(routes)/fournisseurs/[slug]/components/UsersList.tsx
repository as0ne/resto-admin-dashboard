import { SeeIcon, DeleteIcon, ChatIcon } from "@/public/icons";
import { profilPic } from "@/public/images";
import Image from "next/image";
import React from "react";

interface User {
  name: string;
  role: string;
}

const UsersList = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full h-full overflow-y-auto lg:pb-10 flex flex-col items-center">
      {users.map((user, idx) => {
        return (
          <div
            key={user.name}
            className="w-full p-2 flex items-center justify-between gap-20 rounded-md shadow-md shadow-slate-300 mb-2"
          >
            <div className="flex items-start gap-4 text-base font-semibold">
              <Image
                src={profilPic}
                alt="user"
                height={70}
                width={70}
                className="rounded-xl"
              />
              <div>
                <p className="text-slate-600">{user.name}</p>
                <p className="text-teal-600 font-normal">{user.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={(user) => console.log(user)}>
                <SeeIcon fill="#0f766e" />
              </button>
              <button>
                <DeleteIcon fill="red" className="w-[18px] h-[18px]" />
              </button>
              <button>
                <ChatIcon fill="#94a3b8" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
