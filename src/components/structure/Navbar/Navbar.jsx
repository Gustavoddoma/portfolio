"use client";
import Bar from "./Bar";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const [windowSize, setWindowSize] = React.useState(1440);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/Uses", label: "Uses" },
  ];
  const pathname = usePathname();
  return (
    <div>
      {windowSize < 640 ? (
        <Dropdown links={links} />
      ) : (
        <Bar links={links} pathname={pathname} />
      )}
    </div>
  );
};
export default Navbar;
