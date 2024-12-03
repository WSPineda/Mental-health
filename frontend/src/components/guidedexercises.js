import React from "react";
import "./guidedexercises.css";

const GuidedExercises = () => {
  const exercises = [
    {
      title: "Breathing Exercise",
      steps: [
        "Inhale deeply through your nose for 4 seconds.",
        "Hold your breath for 7 seconds.",
        "Exhale slowly through your mouth for 8 seconds.",
      ],
    },
    {
      title: "Mindfulness Activity",
      steps: [
        "Name 5 things you can see.",
        "Name 4 things you can touch.",
        "Name 3 things you can hear.",
        "Name 2 things you can smell.",
        "Name 1 thing you can taste.",
      ],
    },
    {
      title: "Progressive Muscle Relaxation",
      steps: [
        "Tense your toes for 5 seconds, then relax them.",
        "Work your way up, tensing and relaxing each muscle group.",
        "Finish with your shoulders and neck.",
      ],
    },
    {
      title: "Visualization Exercise",
      steps: [
        "Close your eyes and imagine a peaceful place.",
        "Focus on the sights, sounds, and smells of this place.",
        "Spend 5 minutes enjoying this mental escape.",
      ],
    },
    {
      title: "Gratitude Practice",
      steps: [
        "Write down 3 things you’re grateful for.",
        "Reflect on why these things matter to you.",
        "Share your gratitude with someone close to you.",
      ],
    },
    {
      title: "Body Scan Exercise",
      steps: [
        "Start at your head and slowly scan down your body.",
        "Notice areas of tension or discomfort.",
        "Breathe deeply into each area as you relax it.",
      ],
    },
  ];

  return (
    <div className="guided-exercises-container">
      <header className="guided-header">
        <h1>Guided Exercises</h1>
        <p>Discover exercises to help you relax and find calmness.</p>
      </header>
      <div className="exercises-section">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <h2>{exercise.title}</h2>
            <p>Follow these steps:</p>
            <ul>
              {exercise.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="guided-footer">
        <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GuidedExercises;
