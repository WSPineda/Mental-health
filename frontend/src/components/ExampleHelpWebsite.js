import React from 'react';
import './ExampleHelpWebsite.css';

const ExampleHelpWebsite = () => {
  return (
    <div className="example-help-container">
      <h1>Example Help Website</h1>
      <p>
        Explore additional resources and support options on our example help website. Discover tools and information to assist you during challenging times.
      </p>
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="example-link-button"
        aria-label="Visit the Example Help Website"
      >
        Visit Example Help Website
      </a>
    </div>
  );
};

export default ExampleHelpWebsite;
