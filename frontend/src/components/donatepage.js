import React from "react";
import "./donatepage.css";

const Donate = () => {
  return (
    <div className="donate-container">
      <header className="donate-header">
        <h1>Support Mental Health Initiatives</h1>
        <p>Your contribution can help provide accessible mental health resources and services to those in need.</p>
      </header>
      <section className="donation-section">
        <h2>Make a Donation</h2>
        <form className="donation-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="amount">Donation Amount</label>
          <input type="number" id="amount" name="amount" placeholder="Enter amount (USD)" required />

          <button type="submit" className="donate-button">Donate Now</button>
        </form>
      </section>
    </div>
  );
};

export default Donate;
