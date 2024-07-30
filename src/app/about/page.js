import TitleCard from "@/components/structure/TitleCard/TitleCard";
import Image from "next/image";
import Link from "next/link";

// Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import X from "@/components/ui/icons/x";
import EmailComponent from "@/components/ui/icons/email";

export default function About() {
  const socials = [
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

  return (
    <div className="row-auto flex flex-col justify-center gap-4 xl:grid xl:grid-cols-2 xl:gap-6 xl:gap-x-16">
      <div className="order-2 col-start-1 row-span-3 xl:order-1">
        <TitleCard
          profile={false}
          title="Hi! I'm Gus, a Brazilian living in Salt Lake City and actively pursuing my dreams!"
          paragraphs={[
            "I began my education at the Federal University of Paraná (UFPR) in Brazil, where I pursued a major in Biomedical Informatics. During my time at UFPR, I participated in the front-end development team at a junior company associated with the university. In this unpaid position, I worked on several institutional website and mobile application projects, utilizing technologies such as React Native, Vue.js, HTML5, and CSS to create intuitive and user-friendly interfaces. This experience helped me develop my technical skills and provided a strong foundation in front-end development.",
            "Before continuing my academic journey, I served a full-time mission for The Church of Jesus Christ of Latter-day Saints in the northern part of Brazil, specifically in the states of Amazonas and Acre. During my mission, I focused on helping people come closer to Christ through teachings on faith, repentance, baptism, receiving the Holy Ghost, and enduring to the end. This transformative experience taught me valuable skills in interpersonal communication, cultural understanding, empathy, and resilience, which continue to influence my interactions with others.",
            "Upon returning from my mission, I embarked on a new educational path at Ensign College, where I am currently studying Computer Science. In addition to my studies, I work as the front desk representative at the Student Success Center, assisting students in connecting with academic advisors, success coaches, peer mentors, and tutors. My goal is to ensure that students have access to the resources and guidance they need to achieve success in their college journey.",
            "Looking ahead, I aspire to transfer my studies to Brigham Young University (BYU), building on my experiences and continuing to grow both academically and personally. I am eager to explore new opportunities, expand my knowledge, and contribute positively to the community around me."
          ]}
        />
      </div>
      <div className="order-1 flex h-fit justify-center bg-teal-500 lg:col-start-2 lg:row-start-1 lg:bg-transparent xl:order-3 xl:justify-start">
        <Image
          src={"/gus.jpg"}
          alt="hero"
          width={500}
          height={500}
          className="size-[464px] h-[452px] object-cover object-center 2xl:h-max 2xl:w-max"
        />
      </div>
      <div className="order-3 flex flex-col justify-around gap-1 p-1 text-zinc-800 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-2">
        {socials.map((social, key) => {
          return (
            <div key={key} className="flex gap-1 px-2">
              <Link
                href={social.url}
                target="_blank"
                className="flex items-center gap-2 py-2"
              >
                {social.icon}
                <p className="">Follow me on {social.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="order-4 flex w-fit border-t border-zinc-100 px-1 py-8 text-zinc-800 dark:border-zinc-600 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-3">
        <Link
          href="mailto:john@email.com"
          className="flex items-center gap-2 px-2"
          target="_blank"
        >
          <EmailComponent />
          <p>gustavoddoma@gmail.com</p>
        </Link>
      </div>
    </div>
  );
}
