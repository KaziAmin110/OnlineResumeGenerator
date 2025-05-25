import React, { useEffect, useState } from "react";
const Skill = ({
  skill,
  skills,
  skillIndex,
  skillsSections,
  sectionIndex,
  onUpdateSkillsSections,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [skillInput, setSkillInput] = useState(skill);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setSkillInput(skill);
  };

  const handleChangeInput = (e) => {
    setSkillInput(e.target.value);
  };

  const handleEditSkill = () => {
    return skills.map((skill, currentIndex) => {
      if (currentIndex === skillIndex) {
        return skillInput;
      } else {
        return skill;
      }
    });
  };

  const updateSkillsSectionsEdit = () => {
    const updatedSkills = handleEditSkill();

    return skillsSections.map((section, currentIndex) => {
      if (currentIndex === sectionIndex) {
        return {
          ...section,
          sectionSkills: updatedSkills,
        };
      } else {
        return section;
      }
    });
  };

  const handleSaveSkill = () => {
    onUpdateSkillsSections(updateSkillsSectionsEdit);
    setIsEditing(!isEditing);
  };

  const filterCurrentSkill = () => {
    return skills.filter((skill, currentIndex) => currentIndex !== skillIndex);
  };

  const updateSkillsSectionsRemove = () => {
    const updatedSkills = filterCurrentSkill();

    return skillsSections.map((section, currentIndex) => {
      if (currentIndex === sectionIndex) {
        return {
          ...section,
          sectionSkills: updatedSkills,
        };
      } else {
        return section;
      }
    });
  };

  const handleRemoveSkill = () => {
    console.log(updateSkillsSectionsRemove());
    onUpdateSkillsSections(updateSkillsSectionsRemove);
  };

  return (
    <div className="description-item-container">
      {isEditing ? (
        <input value={skillInput} onChange={handleChangeInput}></input>
      ) : (
        <p className="description">{"• " + skill}</p>
      )}
      {isEditing && (
        <button onClick={handleSaveSkill} className="save-btn">
          Save
        </button>
      )}
      <button onClick={handleToggleEdit} className="preview-button">
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleRemoveSkill} className="preview-button">
        Remove
      </button>
    </div>
  );
};

export default Skill;
