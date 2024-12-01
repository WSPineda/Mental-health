import React from 'react';
import './NationalHelpline.css';

const NationalHelpline = () => {
  return (
    <div className="national-helpline-container">
      <h1>National Helpline</h1>
      <p>
        Contact the National Helpline at <strong>1-800-662-HELP (4357)</strong> for free and confidential treatment referral and information services.
      </p>
      <a
        href="https://www.samhsa.gov/find-help/national-helpline"
        target="_blank"
        rel="noopener noreferrer"
        className="helpline-link-button"
        aria-label="Visit the SAMHSA National Helpline website"
      >
        Visit National Helpline
      </a>
    </div>
  );
};

export default NationalHelpline;
