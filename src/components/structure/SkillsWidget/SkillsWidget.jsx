import Lightning from "@/components/ui/icons/lightning";
import Skills from "./SkillsComponent";

// Skills Icons
import JavascriptComponent from "@/components/ui/icons/javascript";
import HtmlComponent from "@/components/ui/icons/html";
import CssComponent from "@/components/ui/icons/css";

const SkillsWidget = () => {
  const skills = [
    {
      name: "Javascript",
      icon: <JavascriptComponent />,
      progress: 90,
    },
    {
      name: "HTML",
      icon: <HtmlComponent />,
      progress: 80,
    },
    {
      name: "CSS",
      icon: <CssComponent />,
      progress: 70,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <div>
        <div className="flex items-center gap-3">
          <Lightning />
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
        </div>
        <div className="pt-2 text-sm dark:text-zinc-400">
          These are some of the skills I developed during my time at Ensign College!
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 pt-6">
        {skills.map((skill, index) => (
          <Skills
            key={index}
            name={skill.name}
            icon={skill.icon}
            progress={skill.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsWidget;
