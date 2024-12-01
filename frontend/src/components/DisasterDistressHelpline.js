import React from 'react';
import './DisasterDistressHelpline.css';

const DisasterDistressHelpline = () => {
  return (
    <div className="disaster-distress-container">
      <h1>Disaster Distress Helpline</h1>
      <p>
        The Disaster Distress Helpline is available 24/7 to provide crisis counseling for people experiencing emotional distress related to natural or human-made disasters.
      </p>
      <p>
        Call <strong>1-800-985-5990</strong> or text <strong>TalkWithUs</strong> to <strong>66746</strong>.
      </p>
      <a
        href="https://www.samhsa.gov/find-help/disaster-distress-helpline"
        target="_blank"
        rel="noopener noreferrer"
        className="distress-link-button"
        aria-label="Visit the SAMHSA Disaster Distress Helpline website"
      >
        Visit Disaster Distress Helpline
      </a>
    </div>
  );
};

export default DisasterDistressHelpline;
