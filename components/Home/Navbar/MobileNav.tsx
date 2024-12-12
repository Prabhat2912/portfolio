import { navLinks } from "@/constants/constants";
import { navLink } from "@/types/types";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-80 w-full h-screen `}
      ></div>
      <div
        className={`${navOpen} transform transition-all duration-500 delay-300 min-w-[250px] text-white fixed justify-center opacity-100 flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-14 z-[10000]  `}
      >
        {navLinks.map((links: navLink) => (
          <Link onClick={closeNav} href={links.url} key={links.id}>
            <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]   ">
              {links.title}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className=" absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 "
        />
      </div>
    </div>
  );
};

export default MobileNav;
