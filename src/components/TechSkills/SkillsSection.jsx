import React, { useState } from "react";
import Skill from "./Skill.jsx";

const SkillsSection = ({
  section,
  skillsSections,
  onUpdateSkillsSections,
  index,
}) => {
  const [sectionSkillInput, setSectionSkillInput] = useState("");
  const [sectionNameInput, setSectionNameInput] = useState(section.sectionName);
  const [isEditing, setIsEditing] = useState(false);

  const handleSectionInput = (e) => {
    setSectionSkillInput(e.target.value);
  };

  const handleSectionNameInput = (e) => {
    setSectionNameInput(e.target.value);
  };

  const onAddNewSkill = () => {
    return skillsSections.map((section, currentIndex) => {
      if (currentIndex === index) {
        return {
          sectionName: section.sectionName,
          sectionSkills: [...section.sectionSkills, sectionSkillInput],
        };
      } else {
        return section;
      }
    });
  };

  const handleAddSkill = () => {
    onUpdateSkillsSections(onAddNewSkill);
    setSectionSkillInput("");
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    return skillsSections.map((section, currentIndex) => {
      if (currentIndex === index) {
        return {
          ...section,
          sectionName: sectionNameInput,
        };
      } else {
        return section;
      }
    });
  };

  const handleSaveSection = () => {
    onUpdateSkillsSections(handleEditSave);
    setIsEditing(!isEditing);
  };

  const filterCurrentSection = () => {
    return skillsSections.filter(
      (skill, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveSection = () => {
    onUpdateSkillsSections(filterCurrentSection);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <input
            value={sectionNameInput}
            onChange={handleSectionNameInput}
          ></input>
        ) : (
          <h3>{section.sectionName}</h3>
        )}
        <button onClick={handleToggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>

        {isEditing && <button onClick={handleSaveSection}>Save</button>}
        <button onClick={handleRemoveSection}>Remove</button>
      </div>

      {section.sectionSkills.map((skill, skillIndex) => {
        return (
          <Skill
            skill={skill}
            key={skillIndex}
            skillIndex={skillIndex}
            skills={section.sectionSkills}
            skillsSections={skillsSections}
            sectionIndex={index}
            onUpdateSkillsSections={onUpdateSkillsSections}
          />
        );
      })}
      <input value={sectionSkillInput} onChange={handleSectionInput}></input>
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
};

export default SkillsSection;
