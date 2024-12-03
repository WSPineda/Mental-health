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
      <section className="motivational-section">
        <p>"Reaching out is the first step towards growth. We’re here to listen."</p>
      </section>
      <section className="contact-section">
        <h2>Send Us a Message</h2>
        {!formSubmitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
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
      <footer className="contact-footer">
        <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
