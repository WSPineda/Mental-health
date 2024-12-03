import React, { useState } from "react";
import "./counselingpage.css";

const CounselingPage = () => {
    const [flipped, setFlipped] = useState([false, false, false]);

    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <div className="counseling-container">
            <header className="counseling-header">
                <h1>Counseling Services</h1>
                <p>Find the right support for your mental health journey.</p>
            </header>
            <section className="counseling-section">
                <h2>Our Counselors</h2>
                <div className="counseling-section-container">
                    {[
                        {
                            name: "Dr. Sarah Johnson",
                            specialization: "Anxiety, Stress Management",
                            description:
                                "Dr. Sarah Johnson has over 10 years of experience in helping individuals overcome anxiety and manage stress effectively. She uses cognitive behavioral therapy and mindfulness techniques to empower her clients.",
                            contact: "Email: sarah.johnson@example.com | Phone: (123) 456-7890",
                            location: "Location: 123 Main Street, Springfield",
                        },
                        {
                            name: "Dr. Robert Smith",
                            specialization: "Depression, Trauma Recovery",
                            description:
                                "Dr. Robert Smith is a compassionate therapist specializing in trauma recovery and depression management. He has worked with individuals from all walks of life and uses evidence-based therapies to guide them toward healing.",
                            contact: "Email: robert.smith@example.com | Phone: (123) 456-7891",
                            location: "Location: 456 Elm Street, Riverdale",
                        },
                        {
                            name: "Dr. Emily Davis",
                            specialization: "Relationship Counseling, Self-esteem",
                            description:
                                "Dr. Emily Davis focuses on improving relationships and building self-esteem. With her empathetic approach and proven methods, she helps her clients gain clarity and strengthen their interpersonal connections.",
                            contact: "Email: emily.davis@example.com | Phone: (123) 456-7892",
                            location: "Location: 789 Oak Avenue, Greenville",
                        },
                    ].map((counselor, index) => (
                        <div
                            className={`counselor-card ${flipped[index] ? "flipped" : ""}`}
                            key={index}
                            onClick={() => handleFlip(index)}
                        >
                            {/* Front of Card */}
                            <div className="counselor-card-front">
                                <h3>{counselor.name}</h3>
                                <p>Specialization: {counselor.specialization}</p>
                                <p>{counselor.description}</p>
                            </div>

                            {/* Back of Card */}
                            <div className="counselor-card-back">
                                <h3>Contact Information</h3>
                                <p>{counselor.contact}</p>
                                <p>{counselor.location}</p>
                                <p>Click to Flip Back</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="counseling-footer">
                <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CounselingPage;