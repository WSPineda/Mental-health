// GuidedExercises.js
import React from "react";
import "./guidedexercises.css";

const GuidedExercises = () => {
  return (
    <div className="guided-exercises-container">
      <header className="guided-header">
        <h1>Guided Exercises</h1>
        <p>Discover exercises to help you relax and find calmness.</p>
      </header>
      <section>
        <h2>Breathing Exercise</h2>
        <p>Follow these steps:</p>
        <ol>
          <li>Inhale deeply through your nose for 4 seconds.</li>
          <li>Hold your breath for 7 seconds.</li>
          <li>Exhale slowly through your mouth for 8 seconds.</li>
        </ol>
      </section>
      <section>
        <h2>Mindfulness Activity</h2>
        <p>Take a moment to observe your surroundings:</p>
        <ul>
          <li>Name 5 things you can see.</li>
          <li>Name 4 things you can touch.</li>
          <li>Name 3 things you can hear.</li>
          <li>Name 2 things you can smell.</li>
          <li>Name 1 thing you can taste.</li>
        </ul>
      </section>
    </div>
  );
};

export default GuidedExercises;