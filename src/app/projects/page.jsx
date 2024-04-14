"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import FooterComponent from "../../components/Footer component/Footer.jsx"; // Renamed to avoid conflicts
import "../../components/Footer component/Footer.css";
import ProjectCard from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Project Card component/ProjectCard.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Project Card component/ProjectCard.css";
import ThemeSwitcher from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css";
import "./projects.css";
export const ProjectsPage = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  const ProjectCard = ({ logo, name, content, link }) => {
    return (
      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="/link.svg" alt="" /> View Project
          </a>
        </div>
      </div>
    );
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
      <main>
        <div className="headerkinda">
          <h1>Some of the many projects that I have participated!</h1>
          <p>
          Below are detailed descriptions of various projects I've led or contributed to during my career, highlighting my technical skills and project management abilities.
          </p>
        </div>

        <div className="Mainarea">
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/ensign.png"
                name="HealthSync AI"
                content="Developed an AI-driven health monitoring platform that leverages machine learning to predict patient health events based on historical data and real-time inputs."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
            <ProjectCard
              logo="/ensign.png"
              name="Smart Traffic Controller"
              content="Initiated and led the development of a Smart Traffic Management System designed to optimize traffic flow in urban areas."
              link="/project-url"
            />
          </div>
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/ensign.png"
                name="Application Integration Platform"
                content="Developed a comprehensive integration platform that facilitated the seamless synchronization of data across various business applications, enhancing operational efficiency and data reliability."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
            <ProjectCard
              logo="/ensign.png"
              name="Cloud Solutions Deployment"
              content="Led the deployment of scalable cloud solutions that supported enterprise-level applications, ensuring robust security measures and system scalability were in place to handle significant user loads."
              link="/project-url"
            />
          </div>
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/ensign.png"
                name="E-commerce Optimization"
                content="Engineered enhancements for an e-commerce platform that improved the checkout process, significantly reducing cart abandonment rates and boosting user satisfaction and sales figures."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
            <ProjectCard
              logo="/ensign.png"
              name="Data Analytics Suite"
              content="Created a data analytics suite that provided actionable insights through advanced data visualizations, aiding strategic decision-making and identifying key market trends."
              link="/project-url"
            />
          </div>
          <div></div>
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
            <a href="/uses">Uses</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
