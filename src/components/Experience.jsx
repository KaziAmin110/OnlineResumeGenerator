import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Experience Section:</h1>
      <button className="show-btn" onClick={toggleVisibility}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && <ExperienceCard />}
    </div>
  );
};

export default Experience;
