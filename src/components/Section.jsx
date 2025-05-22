import React, { useState } from "react";
const Section = ({ section_name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section-container">
      <h1>{section_name}</h1>
      <button className="show-btn" onClick={toggleVisibility}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Section;
