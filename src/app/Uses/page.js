import React from "react";
import UsesSection from "../../components/structure/Uses Card/UsesSection";
import TitleCard from "@/components/structure/TitleCard/TitleCard";

const Page = () => {
  const items = [
    {
      groupName: "Software Tools",
      items: [
        { title: "GitHub", description: "A platform for version control and collaboration, allowing you to manage and store your code projects." },
        { title: "LinkedIn Learning", description: "An online learning platform offering courses on a variety of topics, including software development and other professional skills." },
        { title: "Visual Studio Code", description: "A popular code editor with support for various programming languages and a wide range of extensions." },
        { title: "Linear", description: "A streamlined project management tool designed to help teams plan and track their work efficiently." },
      ],
    },
    {
      groupName: "Gadgets",
      items: [
        { title: "MacBook Air", description: "A lightweight and powerful laptop ideal for on-the-go development and productivity." },
        { title: "iPad Mini", description: "A compact and versatile tablet great for reading, note-taking, and browsing." },
        { title: "Apple AirPods Pro", description: "Noise-cancelling earbuds that provide a high-quality audio experience and are perfect for focused work." },
      ],
    },
    {
      groupName: "Practices",
      items: [
        { title: "Regular Backups", description: "Ensure that you regularly back up your work to avoid data loss and keep your projects safe." },
        { title: "Continuous Learning", description: "Stay updated with the latest trends and technologies in your field through courses and tutorials." },
        { title: "Code Reviews", description: "Participate in code reviews to improve code quality and learn from others' experiences." },
        { title: "Networking", description: "Engage with the tech community through conferences, meetups, and online forums to expand your professional network." },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        <TitleCard
          title="Software I Use, Gadgets I Love, and Other Recommendations"
          paragraphs={[
            "Here’s a collection of the software tools, gadgets, and practices that I use and recommend. From essential development tools like GitHub and Visual Studio Code to the gadgets that make my workday more efficient, I’ve included some of my favorites. I hope you find these recommendations helpful and informative!",
          ]}
        />
      </div>

      <UsesSection className="mt-6" items={items} />
    </div>
  );
};

export default Page;
