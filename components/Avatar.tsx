import React from "react";
import Image from "next/image";
import { profilPic } from "@/public/images";

const Avatar = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={80}
        height={80}
        src={profilPic}
        alt="avatar"
        priority
        className="rounded-full"
      />
      <p className="text-base text-black font-semibold">
        Mohamed <br />
        <span className="text-xs text-slate-400 text-center font-semibold">
          Admin
        </span>
      </p>
    </div>
  );
};

export default Avatar;
