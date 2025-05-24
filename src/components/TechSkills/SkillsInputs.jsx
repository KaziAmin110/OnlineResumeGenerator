import { useState } from "react";

const SkillsInputs = ({ skillsSections, setSkillsSection }) => {
  const [skillSectionInput, setSkillSectionInput] = useState("");

  const handleAddSkillsSection = () => {
    setSkillsSection([
      ...skillsSections,
      { sectionName: skillSectionInput, sectionSkills: [] },
    ]);
    setSkillSectionInput("");
  };

  const onChangeSkillSectionInput = (e) => {
    setSkillSectionInput(e.target.value);
  };

  return (
    <div className="preview-container">
      <div className="input-container">
        <h3>Header Name:</h3>
        <input
          value={skillSectionInput}
          onChange={onChangeSkillSectionInput}
        ></input>
      </div>

      <div className="center-div">
        <button onClick={handleAddSkillsSection} className="preview-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default SkillsInputs;
