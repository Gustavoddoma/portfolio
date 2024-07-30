import Workcard from "../WorkCard/WorkCard";
import WorkComponent from "@/components/ui/icons/work";

const WorkWidget = () => {
  const workExperience = [
    {
      company: "Ensign College",
      title: "Front Desk",
      yearStart: "2024",
      image: "/ensignlogo.png",
    },
    {
      company: "Ecomp",
      title: "Project Advisor",
      yearStart: "2020",
      yearEnd: "2021",
      image: "/ecomp.png",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <div>
        <div className="flex items-center gap-3">
          <WorkComponent />
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
            Work Experience
          </h2>
        </div>
        <div className="pt-2 text-sm dark:text-zinc-400">
          These are some of the companies I have worked with throughout these years.
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 pt-6">
        {workExperience.map((company, key) => {
          return (
            <Workcard
              key={key}
              image={company.image}
              company={company.company}
              title={company.title}
              yearStart={company.yearStart}
              yearEnd={company.yearEnd}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkWidget;
