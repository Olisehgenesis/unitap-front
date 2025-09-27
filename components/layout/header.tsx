"use client";

import Image from "next/image";
import Link from "next/link";
// import { Kodchasan } from "next/font/google";

import dynamic from "next/dynamic";
import LandingButton from "../containers/landing/button";

// const nunitoFont = Kodchasan({
//   weight: ["600"],
//   display: "swap",
//   adjustFontFallback: false,
//   subsets: ["latin"],
// });

const Header = () => {
  return (
    <header className="top-0 z-20 flex w-full flex-wrap items-center justify-center gap-y-4 px-8 py-14 text-xs dark:bg-gray10">
      <Link href={"/"} className="flex items-center gap-3">
        <Image
          src="/img/logocode3spaces.png"
          width={60}
          height={30}
          alt="Code 3 Spaces"
          style={{ objectFit: "contain" }}
        />
        <span className="text-xl font-bold text-black dark:text-white">
          Code 3 Spaces
        </span>
      </Link>

      <div className="hidden flex-1 md:flex"></div>
    </header>
  );
};

export default Header;
