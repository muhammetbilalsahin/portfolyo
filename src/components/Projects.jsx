import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Multi-Step-Form",
      description: "In this project, I developed a multi-step form application using React and React Hook Form. I leveraged the advantages of React Hook Form for user validation and step transitions at each stage of the form. Additionally, to enhance the user experience, I implemented features such as step transition animations and temporary storage of form data..",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/muhammetbilalsahin/multi-step-form",
      demo: "https://multi-step-form-785w.vercel.app/",
    },
    {
      name: "Portfolio Website",
      description: "In this portfolio, I showcase my projects developed with React and modern web technologies in a user-friendly and visually appealing way.",
      tech: ["React", "CSS", "EmailJS"],
      github: "https://github.com/muhammetbilalsahin/portfolio",
      demo: "https://portfolio-mocha-alpha-76.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
