"use client";
import { navLinks } from "@/constants/constants";
import { navLink } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
interface NavProps {
  openNav: () => void;
}
const Navbar: React.FC<NavProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, [navBg]);

  return (
    <div
      className={`fixed h-[12vh] z-[100]  w-full text-white transition-all duration-200 ${
        navBg ? "bg-[#240b39]" : "fixed"
      } `}
    >
      <div className="flex items-center h-full justify-between w-fullsm:w-[90%] xl:w-[80%] mx-auto ">
        <Image src="/images/logo.png" width={170} height={170} alt="logo" />
        <div className="flex items-center space-x-10 ">
          <div className="hidden lg:flex items-center space-x-8 ">
            {navLinks.map((link: navLink) => (
              <Link href={link.url} key={link.id}>
                <p className="nav_link">{link.title}</p>
              </Link>
            ))}
          </div>
          <Link href={"#contact"} className="flex items-center space-x-4">
            <button className="md:px-10 text-blue-800 md:py-3 px-2 py-1 max-sm:text-[12px] leading-4  font-semibold sm:text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg ">
              Contact Me
            </button>
          </Link>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
