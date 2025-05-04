import React, { useState } from "react";
import "../styles/EducationInfo.css";

const EducationInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="section">
      <h1>Education Section</h1>
      <button className="show-btn" onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>

      {isOpen && (
        <div>
          <input
            placeholder="Enter University Name:"
            name="university-name"
            className="fields"
          ></input>
          <input placeholder="Enter GPA:" name="gpa" className="fields"></input>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;
