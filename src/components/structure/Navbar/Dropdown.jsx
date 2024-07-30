import { useState } from "react";
import propTypes from "prop-types";
import Link from "next/link";

const Dropdown = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-testid="dropdown"
      className={`${isOpen ? "" : "border border-zinc-100/5"} dropdown absolute right-20 flex flex-col justify-center rounded-full bg-white drop-shadow-lg dark:bg-zinc-900 dark:shadow-white`}
    >
      <button
        className={`${isOpen ? "rounded-t-3xl border dark:border-zinc-100/5" : "rounded-full"} dropdown-btn p-2 bg-white dark:bg-zinc-900`}
        onClick={toggleDropdown}
      >
        <div className="flex gap-3 px-3 text-center">
          <p>Menu</p>
          {isOpen ? (
            <span className="">&#9650;</span>
          ) : (
            <span className="">&#9660;</span>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2 rounded-b-3xl border border-t bg-white px-5 pb-2 pt-1 dark:border-zinc-100/5 dark:bg-zinc-900">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                "z-50 hover:text-teal-500 focus:text-teal-600 hover:font-semibold focus:font-bold"
              }
              onClick={toggleDropdown}
            >
              <p>{label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
