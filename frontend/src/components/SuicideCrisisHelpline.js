import React from 'react';
import './SuicideCrisisHelpline.css';

const SuicideCrisisHelpline = () => {
  return (
    <div className="suicide-crisis-container">
      <h1>Suicide Crisis Helpline</h1>
      <p>
        If you're in crisis, call the Suicide Crisis Helpline at <strong>988</strong> for immediate help.
      </p>
      <p>
        For additional resources and information, visit the official website of the 988 Suicide & Crisis Lifeline.
      </p>
      <a
        href="https://988lifeline.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="crisis-link-button"
        aria-label="Visit the 988 Suicide & Crisis Lifeline website"
      >
        Visit 988 Suicide & Crisis Lifeline
      </a>
    </div>
  );
};

export default SuicideCrisisHelpline;
