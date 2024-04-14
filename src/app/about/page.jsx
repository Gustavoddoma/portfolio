'use client';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import FooterComponent from "../../components/Footer component/Footer.jsx"; // Renamed to avoid conflicts
import "../../components/Footer component/Footer.css";
import ArticleCard from "../../components/Article Card component/ArticleCard.jsx";
import "../../components/Article Card component/ArticleCard.css";
import ThemeSwitcher from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css';
import './about.css';
export const AboutPage = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  const ArticleCard = ({ date, title, content, link }) => {
    return (
      <article data-testid={"articleCard"} className="article-card">
        <div className="article-card-header">
          <time data-testid={"articleCardDate"}>{date}</time>
          <h2 data-testid={"articleCardTitle"}>{title}</h2>
        </div>
        <p data-testid={"articleCardContent"}>{content}</p>
        <a href={link} data-testid={"articleCardLink"}>
          Read article
        </a>
      </article>
    );
  };

  ArticleCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  ArticleCard.defaultProps = {
    link: "#",
  };

  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6">
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main className="mainabout">
        <div className="leftside">

          {/* <ArticleCard
            title="I'm Jane. I live in New York City, where I develop the future. "
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..."
            link="/sample-article"
          /> */}
          <h1 className="atitle"> I'm Gustavo Domaredzky. I live in Salt Lake City and I study Computer Science at Ensign College.</h1>
          <p className="h1_subpara">I am currently a second-semester student pursuing an Associate’s Degree in Computer Science at Ensign College. My plan is to transfer to Brigham Young University to continue my education. This step aligns with my academic goals and passion for deepening my knowledge in the field.</p>
          <p className="h1_subpara">Originally from Curitiba, Brazil, I served my mission in Manaus, deeply immersing myself in the vibrant culture. I profoundly miss Brazil's rich music, delicious food, and warm people. The unique Brazilian spirit always remains close to my heart, no matter where I am.</p>
          <p className="h1_subpara">
I have a passion for sports, particularly soccer and Formula 1, which captivate my attention with their thrilling competitiveness. Additionally, I'm a food enthusiast with a special love for Mexican and Italian cuisines. Their rich flavors and diverse dishes offer a delightful exploration of culinary arts.</p>
          <p className="h1_subpara">
I am a devoted member of The Church of Jesus Christ of Latter-day Saints. My primary aspiration is to establish a family, providing for them spiritually and materially, and to live as a true disciple of Christ. This goal guides my actions and shapes my future plans.</p>



        </div>
        <div className="rightside">

          <img src="/me.jpeg" alt="Jane Doe" className="profile-image" />
          <p><img className="x" src="./x.png"></img> Follow me on <a href="/" className="sociallink">X</a></p>
          <p><img src="./gt.png"></img>Follow me on <a href="/" className="sociallink">Github</a></p>
          <p><img src="./blu.png"></img>Follow me on <a href="/" className="sociallink">LinkedIn</a></p>
          <hr></hr>
          <p><img className="mail" src="./mail.png"></img>gustavoddoma@gmail.com</p>
          </div>
      </main>
      <aside>
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer">
        <ul className="nav-links" style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
          </div>
  );
}
