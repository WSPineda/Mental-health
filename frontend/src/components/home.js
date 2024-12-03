import React from 'react';
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
          Our mission is to provide accessible, inclusive, and compassionate mental health services for everyone,
          regardless of background, circumstances, or location. We believe that mental well-being is a fundamental
          right, and we are committed to making support and resources available to those who need them most.
        </p>
        <p>
          Whether you are looking for professional counseling, self-help tools, or a supportive community to connect
          with, we are here to guide you every step of the way. Our team of highly trained and empathetic professionals
          works tirelessly to ensure that you feel heard, valued, and empowered to navigate life's challenges with
          confidence and resilience.
        </p>
        <p>
          We are proud to offer a wide range of services, including one-on-one counseling sessions, expertly curated
          self-help resources, and group support programs that foster a sense of belonging and shared understanding.
          Our goal is to create a safe and welcoming space where individuals can grow, heal, and thrive.
        </p>
        <p>
          At the heart of everything we do is a deep commitment to promoting mental health awareness, reducing stigma,
          and building a more compassionate world. Together, we can break the barriers that prevent individuals from
          seeking help and create a brighter future for everyone.
        </p>
      </section>


      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-section-container">
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
        </div>
      </section>

      <footer className="footer-section">
        <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
