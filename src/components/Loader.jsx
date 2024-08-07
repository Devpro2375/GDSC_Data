// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.6); /* Slightly darker for better visibility */
          z-index: 1000;
        }
        .loader {
          width: 80px;
          height: 80px;
          border: 8px solid rgba(255, 255, 255, 0.3); /* Light color with opacity */
          border-top: 8px solid #3498db; /* Bright color */
          border-radius: 50%;
          animation: spin 1.2s linear infinite, pulse 1.5s ease-in-out infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
