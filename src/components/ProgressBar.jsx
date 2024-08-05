// ProgressBar.js
import React from "react";

const ProgressBar = ({ value }) => {
  const percentage = parseFloat(value); 

  return (
    <div className="relative w-32  bg-gray-700 rounded-full h-6">
      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
        {value}
      </div>
    </div>
  );
};

export default ProgressBar;
