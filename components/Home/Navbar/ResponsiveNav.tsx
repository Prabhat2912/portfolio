"use client";
import React, { useState } from "react";
import Navbar from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const hideNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
