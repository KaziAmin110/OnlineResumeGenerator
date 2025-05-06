import React, { useState } from "react";
import "../styles/EducationInfo.css";

const EducationInfo = ({
  university,
  changeUniversityInput,
  gpa,
  changeGpaInput,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="section">
      <h1>Education Section:</h1>
      <button className="show-btn" onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>

      {isOpen && (
        <div>
          <h3>Enter University: </h3>
          <input
            placeholder="Enter University Name:"
            name="university-name"
            className="fields"
            value={university}
            onChange={(e) => changeUniversityInput(e.target.value)}
          ></input>
          <h3>Enter GPA:</h3>
          <input
            placeholder="Enter GPA:"
            name="gpa"
            className="fields"
            value={gpa}
            onChange={(e) => changeGpaInput(e.target.value)}
          ></input>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;
