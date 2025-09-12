import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_camlrfs", // senin service ID
      "template_qoesour", // senin template ID
      form.current,
      "ubD-SnCNjM2x8-xli" // senin public key
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Oops! Something went wrong.");
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
