import React from "react";
import { BsTwitter } from "react-icons/all";
import { useRouter } from "next/router";

interface SidebarLogoProps {}

const SidebarLogo: React.FC<SidebarLogoProps> = ({}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={
        "rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
      }
    >
      <BsTwitter size={26} color={"white"} />
    </div>
  );
};

export default SidebarLogo;
