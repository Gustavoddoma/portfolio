import PropTypes from "prop-types";

const Skills = ({ icon, name, progress }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <div className="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full border border-zinc-900/5 shadow-md shadow-zinc-800/10">
          {icon}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-lg font-bold text-black dark:text-zinc-100">
          {name}
        </h2>
        <div className="relative h-7 overflow-hidden rounded-full bg-gray-300">
          <div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-teal-500 transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  icons: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
};

export default Skills;
