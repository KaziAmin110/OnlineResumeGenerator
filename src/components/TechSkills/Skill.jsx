import React, { useState } from "react";
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
    onUpdateSkillsSections(updateSkillsSectionsRemove);
  };

  return (
    <div>
      {isEditing ? (
        <input value={skillInput} onChange={handleChangeInput}></input>
      ) : (
        <p>{skill}</p>
      )}
      <button onClick={handleToggleEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && <button onClick={handleSaveSkill}>Save</button>}

      <button onClick={handleRemoveSkill}>Remove</button>
    </div>
  );
};

export default Skill;
