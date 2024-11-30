import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions, feedback, or support requests.</p>
      </header>
      <section className="contact-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
