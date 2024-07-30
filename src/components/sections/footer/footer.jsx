import React from "react";
import Link from "next/link";

//use <footer>?
const Footer = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/Uses", label: "Uses" },
  ];

  return (
    <footer className="flex flex-col border-t border-t-zinc-100 bg-white px-8 pb-16 pt-10 text-center dark:border-slate-500 dark:border-opacity-40 dark:bg-zinc-900 md:flex-row md:justify-between md:px-36 md:pb-36 md:pt-10">
      <div className="flex justify-center gap-6 text-sm font-normal text-zinc-800 dark:text-zinc-300">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="py-2 hover:text-teal-500">
            {label}
          </Link>
        ))}
      </div>
      <div className="text-xs text-zinc-400 dark:text-zinc-400 md:text-sm">
        <p>&copy; 2024 Gustavo Domaredzky. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
