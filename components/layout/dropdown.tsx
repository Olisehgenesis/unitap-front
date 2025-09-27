"use client";

import { useOutsideClick } from "@/utils/hooks/dom";
import RoutePath from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { useState } from "react";

const RenderNavbarDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <span className="ml-auto cursor-pointer">
      <Image
        src="/assets/images/navbar/navbar-dropdown-icon.svg"
        width={31}
        height={31}
        alt="unitap menu"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      />
      {isDropdownVisible && (
        <NavbarDropdown
          closeDropdown={() => setIsDropdownVisible(false)}
          className="navbar__dropdown__component"
        />
      )}
    </span>
  );
};

type NavbarDropdownProps = {
  className: string;
  closeDropdown: Function;
};

const navItems = [
  {
    name: "Home",
    link: RoutePath.HOME,
    icon: "/assets/images/navbar/navbar-dropdown-home.svg",
    iconWidth: "auto",
    iconHeight: "28px",
    route: RoutePath.HOME,
  },
  {
    name: "About",
    link: RoutePath.ABOUT,
    icon: "/assets/images/navbar/navbar-dropdown-home.svg",
    iconWidth: "auto",
    iconHeight: "28px",
    route: RoutePath.ABOUT,
  },
  {
    name: "Contact",
    link: RoutePath.CONTACT,
    icon: "/assets/images/navbar/navbar-dropdown-home.svg",
    iconWidth: "auto",
    iconHeight: "28px",
    route: RoutePath.CONTACT,
  },
];

const NavbarDropdown = ({ className, closeDropdown }: NavbarDropdownProps) => {
  const path = usePathname();

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => closeDropdown());

  return (
    <div
      ref={ref}
      className={`absolute right-8 top-14 z-30 cursor-default rounded-lg border-2 border-gray00 bg-gray20 px-3 pb-1 pt-2.5 ${
        className ? className : ""
      }`}
    >
      {navItems.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.link}
            onClick={() => closeDropdown()}
            className={`mb-2 flex h-11 w-52 cursor-pointer items-center justify-between rounded-lg border-2 bg-gray30 px-4 transition-all duration-75 ${
              path === item.route
                ? "mb-2 rounded-lg border-gray100 bg-gray10 px-4"
                : item.link && "border-gray40 hover:bg-gray20"
            } ${!item.link && "cursor-default"}`}
          >
            <p
              className={`text-sm font-semibold ${
                path === item.route
                  ? "bg-primaryGradient bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {item.name}
            </p>
            <Image alt={item.name} src={item.icon} width={20} height={28} />
          </Link>
        );
      })}

    </div>
  );
};

export default RenderNavbarDropdown;
