import React from "react";
import { BsBellFill, BsHouseFill, FaUser, BiLogOut } from "react-icons/all";
import SidebarLogo from "@/pages/components/layout/SidebarLogo";
import _map from "lodash/map";
import SidebarItem from "@/pages/components/layout/SidebarItem";
import SidebarTweetButton from "@/pages/components/layout/SidebarTweetButton";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const icons = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className={"col-span-1 h-full pr-4 md:pr-6"}>
      <div className={"flex flex-col items-end"}>
        <div className={"space-y-2 lg:w-[230px]"}>
          <SidebarLogo />
          {_map(icons, (icon) => (
            <SidebarItem
              key={icon.href}
              href={icon.href}
              label={icon.label}
              icon={icon.icon}
            />
          ))}
          <SidebarItem label={"Logout"} icon={BiLogOut} onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
