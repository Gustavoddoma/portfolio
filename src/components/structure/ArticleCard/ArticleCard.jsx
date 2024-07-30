import PropTypes from "prop-types";
import RightComponent from "@components/ui/icons/right";

const ArticleCard = ({ date, title, content, link = "#" }) => {
  return (
    <article className="flex w-full max-w-2xl flex-col">
      <div className="flex items-center gap-3">
        <span className="w-0.5 bg-zinc-200 dark:bg-zinc-500">&nbsp;</span>
        <time className="text-sm text-zinc-400">{date}</time>
      </div>
      <div className="pt-3">
        <h2 className="font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
      </div>
      <div className="pt-2">
        <p className="text-sm">{content}</p>
      </div>
      <div className="flex items-baseline gap-3 pt-4">
        <a
          href={link}
          className="text-sm text-teal-500 hover:text-teal-600 focus:text-teal-500"
        >
          Visit Website
        </a>
        <RightComponent />
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ArticleCard;
