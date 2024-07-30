import Link from "next/link";
import propTypes from "prop-types";
import "./header.css";

const Bar = ({ links, pathname }) => {
  return (
    <div className="flex gap-3">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${pathname === href ? "header-custom text-teal-500 shadow-md shadow-teal-600/50" : ""} hover:text-teal-600 focus:text-teal-500 z-50`}
        >
          <p>{label}</p>
        </Link>
      ))}
    </div>
  );
};

Bar.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
    }),
  ).isRequired,
  pathname: propTypes.string.isRequired,
};

export default Bar;
