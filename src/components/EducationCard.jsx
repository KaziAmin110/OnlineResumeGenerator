import React, { useState } from "react";
import "../styles/EducationInfo.css";

const EducationCard = ({ personalInfo, onUpdateUniversityInfo }) => {
  return (
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
  );
};

export default EducationCard;
