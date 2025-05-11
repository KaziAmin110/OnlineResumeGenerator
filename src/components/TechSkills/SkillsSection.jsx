import React, { useState } from "react";
import Skill from "./Skill.jsx";

const SkillsSection = ({ sectionName, onUpdateSkillsSection, index }) => {
  const [sectionSkills, setSectionSkills] = useState([]);
  const [sectionSkillInput, setSectionSkillInput] = useState("");

  const handleSectionInput = (e) => {
    setSectionSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    setSectionSkills([...sectionSkills, sectionSkillInput]);
    setSectionSkillInput("");
  };

  return (
    <div>
      <h3>{sectionName}</h3>
      {sectionSkills.map((skill, index) => {
        return (
          <Skill
            skill={skill}
            key={index}
            index={index}
            skills={sectionSkills}
            onUpdateSkills={setSectionSkills}
          />
        );
      })}
      <input value={sectionSkillInput} onChange={handleSectionInput}></input>
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
};

export default SkillsSection;
