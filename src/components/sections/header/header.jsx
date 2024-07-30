import React from "react";
import Toggle from "@/components/structure/Toggle/Toggle";
import Navbar from "@/components/structure/Navbar/Navbar";

const Header = () => {
  return (
    <header className="z-50 h-[88px] bg-white px-4 py-6 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 md:h-20 md:px-24 md:pb-2 md:pt-6">
      <div className="flex justify-end gap-6 sm:justify-between">
        <div className="hidden sm:block"></div>
        <Navbar />
        <Toggle />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
