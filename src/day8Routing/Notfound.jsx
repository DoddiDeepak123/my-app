import React from "react";
import "./Notfound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="notfound-button">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
