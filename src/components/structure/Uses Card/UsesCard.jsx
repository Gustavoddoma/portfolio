import PropTypes from "prop-types";

const UsesCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[420px] uses-card">
      <h3 className="m-0 text-lg font-bold text-black dark:text-white">
        {title}
      </h3>
      <p className="m-0 text-gray-600 dark:text-zinc-400">{description}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UsesCard;
