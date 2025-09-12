import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Muhammet Bilal Şahin. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/muhammetbilalsahin" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
          <a href="https://www.linkedin.com/in/muhammet-bilal-sahin/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="http://x.com/MuhammetBilala8" target="_blank" rel="noopener noreferrer"> <FaXTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
