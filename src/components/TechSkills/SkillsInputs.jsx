import { useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";

const SkillsInputs = ({ skillsSections, setSkillsSection }) => {
  const [skills, setSkills] = useState([]);
  const [skillHeaderInput, setSkillHeaderInput] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkillsSection = () => {
    setSkillsSection([
      ...skillsSections,
      { sectionName: skillHeaderInput, sectionSkills: skills },
    ]);
    setSkillHeaderInput("");
    setSkillInput("");
    setSkills([]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, skillInput]);
    setSkillInput("");
  };

  const onChangeSkillHeaderInput = (e) => {
    setSkillHeaderInput(e.target.value);
  };

  const onChangeSkillInput = (e) => {
    setSkillInput(e.target.value);
  };

  return (
    <div className="preview-container">
      <div className="input-container">
        <h3>Header Name:</h3>
        <input
          value={skillHeaderInput}
          onChange={onChangeSkillHeaderInput}
        ></input>
      </div>

      <DescriptionList
        addButtonText={"Add Skill"}
        header={"Skills: "}
        descriptions={skills}
        onUpdateDescriptions={setSkills}
      />
      {/* <div className="input-container">
        <input onChange={onChangeSkillInput} value={skillInput}></input>
        <button onClick={handleAddSkill}>Add Skill</button>
      </div> */}

      <div className="center-div">
        <button onClick={handleAddSkillsSection} className="preview-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default SkillsInputs;
