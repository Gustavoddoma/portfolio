import React from "react";
import ProjectCard from "../../components/structure/ProjectCard/ProjectCardComponent.jsx";
import TitleCard from "@/components/structure/TitleCard/TitleCard.jsx";

export default function Projects() {
  const projects = [
    {
      logo: "/webdevelopment.png",
      name: "Personal Portfolio",
      content:
        "This portfolio was part of a Web Development class I took at Ensign College, where I had the opportunity to collaborate with a team. Through this project, we created a personal tool that I can utilize for my future success.",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleCard
        title="Projects I've Contributed To!"
        paragraphs={[
          "These are some of the projects I have worked on during this time, which have significantly contributed to the development of my skills as a software developer. Through these experiences, I have enhanced my proficiency in various programming languages and frameworks, collaborated effectively with teams, and gained valuable insights into software development.",
        ]}
      />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
