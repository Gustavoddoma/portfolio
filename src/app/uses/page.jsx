'use client';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import Footer from "../../components/Footer component/Footer.jsx";
import "../../components/Footer component/Footer.css";
import UsesCard from "../../components/Uses Card Component/UsesCard.jsx";
import "../../components/Uses Card Component/UsesCard.css";
import UsesSection from "../../components/Uses Section Component/UsesSection.jsx";
import "../../components/Uses Section Component/UsesSection.css";
import ThemeSwitcher from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css';
import './Uses.css';

export const UsesPage = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const UsesCardComponent = ({ title, content }) => {
    return (
      <div className={'uses-card'}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  UsesCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  const usesItems = [
    {
      groupName: "Communication",
      items: [
        { title: "Advanced English Proficiency", description: "Fluent in English through academic pursuits at international institutions and practical use in diverse environments, enhancing my ability to communicate effectively in a global context." },
        { title: "Interpersonal Communication", description: "Refined communication skills from interacting with a multicultural community during my mission, enabling me to engage effectively with people from various backgrounds." },
        { title: "Public Speaking", description: "Developed strong public speaking abilities through regular presentations and discussions in academic settings and community engagements." },
        { title: "Cross-cultural Competence", description: "Gained significant exposure to different cultures through my education and mission work, which has equipped me with the skills to navigate and embrace diverse environments." },
        { title: "Team Collaboration", description: "Experienced in working within diverse teams, fostering a collaborative and inclusive atmosphere, and driving collective success through effective teamwork." },
      ],
    },
    {
      groupName: "Technical Skills",
      items: [
        { title: "Software Development", description: "Skilled in software development with a focus on efficient problem solving and coding in multiple programming languages, cultivated through academic coursework and personal projects." },
        { title: "Project Management", description: "Capable of managing software development projects from conception through to delivery, ensuring alignment with objectives and optimal resource utilization." },
      ],
    },
  ];

  const UsesSectionComponent = ({ items }) => {
    return (
      <section className="uses-section">
        <div className="uses-section__content">
          {items.map((group, index) => (
            <div className="uses-section__group" key={index}>
              <h2>{group.groupName}</h2>
              <div className="uses-section__group-content">
                {group.items.map((item, i) => (
                  <UsesCardComponent title={item.title} content={item.description} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  UsesSectionComponent.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        groupName: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
          })
        ),
      })
    ),
  };

  UsesSectionComponent.defaultProps = {
    items: [],
  };

  const options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/uses', label: 'Uses' },
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6">
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main>
      <h1 className="hone">Here is a list of all the skills I have aquired through these years!</h1>
      <p>I began my educational journey at the International School of Curitiba, followed by studies at Universidade Federal do Paraná, and eventually continued my education at Ensign College. This diverse academic path allowed me to engage with people from various backgrounds, enriching my understanding of different cultures and perspectives. The opportunity to interact and learn alongside such a wide array of individuals has greatly enhanced my personal and educational experiences, preparing me for a globalized world.</p>
        <UsesSection items={usesItems} />
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
