import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-container" role="form" aria-labelledby="contact-header">
      <header className="contact-header" id="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions, feedback, or support requests.</p>
      </header>
      <section className="contact-section">
        <h2>Send Us a Message</h2>
        {!formSubmitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <p>Thank you for reaching out! We’ll get back to you as soon as possible.</p>
          </div>
        )}
      </section>
      <section className="motivational-section">
        <p>"Reaching out is the first step towards growth. We’re here to listen."</p>
      </section>
    </div>
  );
};

export default Contact;
