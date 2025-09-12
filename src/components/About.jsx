import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Muhammet Bilal Şahin</span>, a passionate 
          <strong> Fullstack Developer</strong> who builds modern and scalable web applications.
          With expertise in <strong>React, Node.js, and MongoDB</strong>, I love creating
          clean, functional, and user-friendly experiences.
        </p>
        <p>
          My goal is to provide <span className="highlight">efficient and innovative solutions</span> 
          that help businesses grow and succeed in the digital world.
        </p>
      </div>
    </section>
  );
}
