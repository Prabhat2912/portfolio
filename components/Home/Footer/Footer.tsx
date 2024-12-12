import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-16 bg-[#0f0715] text-white ">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={180}
          height={180}
          className="mx-auto "
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 font-bold  ">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <p className="text-opacity-60 mt-6 text-center ">
        © 2025 All Rights Reserved by Prabhat Kumar
      </p>
    </div>
  );
};

export default Footer;
