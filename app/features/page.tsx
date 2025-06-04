"use client";

import React, { useState } from "react";

const FeaturePage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="page-title">Welcome to the Features Page</h1>

      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <p>
          hello my name is annie
        </p>
      )}
    </div>
  );
};

export default FeaturePage;
