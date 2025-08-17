// components/UHeading.jsx
import React from "react";

const UHeading = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Line before heading */}
      <div className="w-20 h-[6px] bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-purple-700 dark:from-white dark:via-zinc-300 dark:to-zinc-500"></div>

      {/* Heading */}
      <h1
        className="text-[7vw] md:text-[4.25vw] font-extrabold leading-tight 
          bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
          bg-clip-text text-transparent
          dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
      >
        {text}
      </h1>
    </div>
  );
};

export default UHeading;
