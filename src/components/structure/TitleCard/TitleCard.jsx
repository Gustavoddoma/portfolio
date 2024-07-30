import propTypes from "prop-types";
import Image from "next/image";

const TitleCard = ({ profile = false, title, paragraphs }) => {
  let profilePicture;
  if (profile)
    profilePicture = (
      <div className="flex w-fit rounded-full bg-white bg-opacity-90 p-[2px] focus:outline focus:outline-1 focus:outline-teal-400">
        <Image
          src={"/gus.jpg"}
          width={240}
          height={240}
          alt="Profile Picture"
          className="h-16 w-16 rounded-full border border-zinc-800 border-opacity-5 shadow-lg shadow-zinc-800/5"
        />
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      {profile ? <div>{profilePicture}</div> : null}
      <div>
        <h1 className="text-left text-5xl font-bold text-zinc-800 dark:text-zinc-100">
          {title}
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        {paragraphs?.map((p, key) => {
          return (
            <div key={key}>
              <p>{p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;

TitleCard.propTypes = {
  profile: propTypes.bool,
  title: propTypes.string.isRequired,
  paragraphs: propTypes.arrayOf(propTypes.string).isRequired,
};
