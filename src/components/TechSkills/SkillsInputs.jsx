import { useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";

const SkillsInputs = ({ skillsSections, setSkillsSection }) => {
  const [skills, setSkills] = useState([]);
  const [skillHeaderInput, setSkillHeaderInput] = useState("");

  const handleAddSkillsSection = () => {
    setSkillsSection([
      ...skillsSections,
      { sectionName: skillHeaderInput, sectionSkills: skills },
    ]);
    setSkillHeaderInput("");
    setSkills([]);
  };

  const onChangeSkillHeaderInput = (e) => {
    setSkillHeaderInput(e.target.value);
  };

  return (
    <div className="preview-container">
      <div className="input-container">
        <h3 className="input-header">Enter Header Name:</h3>
        <input
          value={skillHeaderInput}
          name="skillHeaderInput"
          onChange={onChangeSkillHeaderInput}
        ></input>
      </div>

      <DescriptionList
        addButtonText={"Add Skill"}
        header={"Skills: "}
        descriptions={skills}
        onUpdateDescriptions={setSkills}
      />
      
      <div className="center-div">
        <button onClick={handleAddSkillsSection} className="save-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default SkillsInputs;
