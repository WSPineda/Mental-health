import React from "react";
import "./counselingpage.css";

const CounselingPage = () => {
    return (
        <div className="counseling-container">
            <header className="counseling-header">
                <h1>Counseling Services</h1>
                <p>Find the right support for your mental health journey.</p>
            </header>
            <section className="counseling-section">
                <h2>Our Counselors</h2>
                <div className="counselor-card">
                    <h3>Dr. Sarah Johnson</h3>
                    <p>Specialization: Anxiety, Stress Management</p>
                    <button className="contact-button">Contact</button>
                </div>
                <div className="counselor-card">
                    <h3>Dr. Robert Smith</h3>
                    <p>Specialization: Depression, Trauma Recovery</p>
                    <button className="contact-button">Contact</button>
                </div>
                <div className="counselor-card">
                    <h3>Dr. Emily Davis</h3>
                    <p>Specialization: Relationship Counseling, Self-esteem</p>
                    <button className="contact-button">Contact</button>
                </div>
            </section>
        </div>
    );
};

export default CounselingPage;