import TitleCard from "@/components/structure/TitleCard/TitleCard";
import SignupWidget from "@/components/structure/Signup/SignupWidget";
import ArticleCard from "@/components/structure/ArticleCard/ArticleCard";
import WorkWidget from "@/components/structure/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/structure/SkillsWidget/SkillsWidget";

// Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import X from "@/components/ui/icons/x";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "X",
      url: "https://x.com/gustavoddoma",
      icon: <X />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Gustavoddoma",
      icon: <Github />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gustavoddoma",
      icon: <Linkedin />,
    },
  ];

  const articles = [
    {
      date: "Sep 2020 - Jan 2021 · 5 mos",
      title: "Project Advisor @ ECOMP - Junior IT Company at UFPR",
      content:
        "I participated in the front-end development team for several institutional website and mobile application projects at a junior company of the university I first attended. In this unpaid position, I utilized technologies such as React Native, Vue.js, HTML5, and CSS to contribute to the design and implementation of user-friendly interfaces. This experience allowed me to develop my skills in front-end development while collaborating with a team to deliver impactful digital solutions.",
      link: "https://www.ecomp.co/?fbclid=IwY2xjawEUppJleHRuA2FlbQIxMAABHXFfde6WCis3SRyjvIZ5hyLwNT6wrf006aS8QQbynp2eA_SJH7ho0QzUcQ_aem_d7y_OX2mf5iWDUEt647m3Q",
    },
    {
      date: "Aug 2021 - Jul 2023",
      title: "Full-Time Missionary @ The Church of Jesus Christ of The Latter-Day Saints",
      content:
        "I served a full-time mission for The Church of Jesus Christ of Latter-day Saints in the northern part of Brazil, specifically in the states of Amazonas and Acre. During my mission, I helped people come closer to Christ through teachings focused on faith, repentance, baptism, receiving the Holy Ghost, and enduring to the end. This experience was transformative for me personally, as I learned valuable skills in interpersonal communication, cultural understanding, and personal growth. My time in Brazil allowed me to develop a deeper sense of empathy and resilience, which continue to influence my interactions with others.",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
    },
    {
      date: "Jan 2024 - Present",
      title: "Front Desk @ Student Success Center - Ensign College",
      content:
        "I am currently working at Ensign College as the front desk representative of the Student Success Center. In this role, I assist students in connecting with their academic advisors, success coaches, peer mentors, and tutors to ensure that students have access to the resources and guidance they need to achieve success in their college journey.",
      link: "https://www.ensign.edu/student-success-center",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        <TitleCard
          profile={true}
          title={"Tech Enthusiast, Soccer Lover & Foodie Friend"}
          paragraphs={[
            "I'm a 23-year-old Brazilian on the journey to becoming a Software Developer. I'm currently pursuing my Associate's Degree in Computer Science at Ensign. Before this, I just returned from a mission in the Brazil Manaus mission. In my free time, I'm a fan of Mexican cuisine and a dedicated sports enthusiast, with soccer being a particular passion of mine.  ",
          ]}
        />
        <div className="flex gap-3">
          {links.map((link, key) => {
            return (
              <Link key={key} href={link.url} target="_blank">
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex w-fit flex-col gap-5 py-8 lg:w-full lg:max-w-lg lg:mr-16">
          {articles.map((article, key) => {
            return (
              <ArticleCard
                key={key}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-10 py-8 lg:w-full lg:max-w-sm">
          <SignupWidget
            title="Stay up to date"
            content="Get notified when I publish something new, and unsubscribe at any time."
          />
          <WorkWidget />
          <SkillsWidget />
        </div>
      </div>
    </div>
  );
}
