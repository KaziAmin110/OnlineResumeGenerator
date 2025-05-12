import React, { useState } from "react";
import Skill from "./Skill.jsx";

const SkillsSection = ({
  sectionName,
  skillsSections,
  onUpdateSkillsSection,
  index,
}) => {
  const [sectionSkills, setSectionSkills] = useState([]);
  const [sectionSkillInput, setSectionSkillInput] = useState("");
  const [sectionNameInput, setSectionNameInput] = useState(sectionName);
  const [isEditing, setIsEditing] = useState(false);

  const handleSectionInput = (e) => {
    setSectionSkillInput(e.target.value);
  };

  const handleSectionNameInput = (e) => {
    setSectionNameInput(e.target.value);
  };

  const handleAddSkill = () => {
    setSectionSkills([...sectionSkills, sectionSkillInput]);
    setSectionSkillInput("");
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    return skillsSections.map((section, currentIndex) => {
      if (currentIndex === index) {
        return sectionNameInput;
      } else {
        return section;
      }
    });
  };

  const handleSaveSection = () => {
    onUpdateSkillsSection(handleEditSave);
    setIsEditing(!isEditing);
  };

  const filterCurrentSection = () => {
    return skillsSections.filter(
      (skill, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveSection = () => {
    onUpdateSkillsSection(filterCurrentSection);
  };

  console.log(sectionName, sectionSkills);
  return (
    <div>
      <div>
        {isEditing ? (
          <input
            value={sectionNameInput}
            onChange={handleSectionNameInput}
          ></input>
        ) : (
          <h3>{sectionName}</h3>
        )}
        <button onClick={handleToggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>

        {isEditing && <button onClick={handleSaveSection}>Save</button>}
        <button onClick={handleRemoveSection}>Remove</button>
      </div>

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
