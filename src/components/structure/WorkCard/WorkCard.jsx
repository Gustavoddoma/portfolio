import Image from "next/image";
import propType from "prop-types";

const Workcard = ({
  company,
  title,
  yearStart,
  yearEnd = "Present",
  image,
}) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full border border-zinc-900/5 shadow-md shadow-zinc-800/10">
        <Image
          src={image}
          alt={`${company} Logo`}
          width={28}
          height={28}
          className="h-7 w-7 object-cover object-center"
        />
      </div>
      <div className="w-full">
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {company}
        </div>
        <div className="flex items-end justify-between">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {title}
          </div>
          <div className="text-sm text-zinc-400 dark:text-zinc-500">
            {yearStart} - {yearEnd}
          </div>
        </div>
      </div>
    </div>
  );
};

Workcard.propTypes = {
  company: propType.string.isRequired,
  title: propType.string.isRequired,
  yearStart: propType.string.isRequired,
  yearEnd: propType.string,
};

export default Workcard;
