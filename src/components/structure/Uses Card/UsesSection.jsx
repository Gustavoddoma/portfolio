import PropTypes from "prop-types";
import UseCard from "./UsesCard.jsx";

const UsesSection = ({ items }) => {
  return (
    <section className="flex flex-col p-4">
      <div className="flex flex-col gap-16">
        {items.map((group, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-8 pl-4 border-l-2 border-gray-300"
          >
            <h2 className="mt-0 text-lg font-bold min-w-[128px] text-black dark:text-white">
              {group.groupName}
            </h2>
            <div className="flex flex-col gap-8">
              {group.items.map((item, itemIndex) => (
                <UseCard
                  key={itemIndex}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.arrayOf(
            PropTypes.shape({
              description: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
