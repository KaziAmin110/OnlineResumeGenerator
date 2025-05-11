import React, { useState } from "react";
const Skill = ({ skill, skills, onUpdateSkills, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [skillInput, setSkillInput] = useState(skill);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeInput = (e) => {
    setSkillInput(e.target.value);
  };

  const handleEditSave = () => {
    return skills.map((skill, currentIndex) => {
      if (currentIndex === index) {
        return skillInput;
      } else {
        return skill;
      }
    });
  };

  const handleSaveSkill = () => {
    onUpdateSkills(handleEditSave);
    setIsEditing(!isEditing);
  };

  const filterCurrentSkill = () => {
    return skills.filter((skill, currentIndex) => currentIndex !== index);
  };

  const handleRemoveSkill = () => {
    onUpdateSkills(filterCurrentSkill);
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
