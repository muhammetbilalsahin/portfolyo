import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("#about");

  // Scroll event ile aktif bölgeyi takip ediyoruz
  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive("#" + id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">| Muhammet Bilal Şahin</h1>
        <ul className="nav-links">
          <li>
            <a
              href="#about"
              className={active === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={active === "#skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "#projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
