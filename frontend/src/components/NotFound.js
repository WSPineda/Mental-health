import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <a href="/" style={{ color: "#00cec9" }}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
