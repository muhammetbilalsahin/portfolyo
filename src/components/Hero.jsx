import React from "react";
import "./Hero.css";
import profile from "../assets/images/portfolio.png";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        {/* Yazılar */}
        <div className="hero-text">
          <h1 className="fade-in-up">Muhammet Bilal Şahin</h1>
          <h2 className="fade-in-up delay-1">
            <ReactTyped
              strings={[
                "Fullstack Developer",
                "React & Node.js Specialist",
                "Modern Web Solutions"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p className="fade-in-up delay-2">
            I build scalable and modern applications using React, Node.js and cutting-edge technologies.
          </p>
          <div className="hero-buttons fade-in-up delay-3">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="/src/assets/images/cv.jpg" className="btn-secondary" download>Download CV</a>
          </div>
        </div>

        {/* Fotoğraf */}
        <div className="hero-photo fade-in-up delay-2">
          <img src={profile} alt="Muhammet Bilal Şahin" />
        </div>
      </div>
    </section>
  );
}
