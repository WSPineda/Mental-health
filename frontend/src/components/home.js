import React, { useEffect } from 'react';
import './home.css';

const Home = () => {


  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Mental Health Support</h1>
        <p>
          Discover resources, services, and community support to help you take charge of your mental well-being.
        </p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Our mission is to provide accessible and compassionate mental health services for everyone.
          Whether you need counseling, resources, or community support, we are here for you.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Counseling</h3>
          <p>Professional and compassionate therapists are ready to help you.</p>
        </div>
        <div className="service-card">
          <h3>Resources</h3>
          <p>Explore a variety of self-help articles, guides, and tools.</p>
        </div>
        <div className="service-card">
          <h3>Support Groups</h3>
          <p>Join our support groups to connect with others on similar journeys.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions? Need help? Call us at <strong>123-456-7890</strong> or email us at 
          <strong> contact@mentalhealthsupport.com</strong>.
        </p>
      </section>

      <footer className="footer-section">
        <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
