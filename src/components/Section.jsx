import React, { useState } from "react";
import ExperienceCard from "./Experience/ExperienceCard";

const Section = ({ section_name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>{section_name}</h1>
      <button className="show-btn" onClick={toggleVisibility}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Section;
