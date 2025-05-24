import { useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";

const ProjectInputs = ({ projects, onUpdateProjects }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  const handleChangeProjectTitle = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleAddProject = () => {
    onUpdateProjects([
      ...projects,
      {
        projectTitle,
        projectTechnologies,
        descriptions,
      },
    ]);
    setProjectTitle("");
    setProjectTechnologies([]);
    setDescriptions([]);
  };
  return (
    <div className="preview-container">
      <div className="input-container">
        <h3>Project Title:</h3>
        <input
          placeholder=""
          onChange={handleChangeProjectTitle}
          value={projectTitle}
        ></input>
      </div>

      <DescriptionList
        descriptions={descriptions}
        onUpdateDescriptions={setDescriptions}
        header="Project Descriptions:"
      />

      <DescriptionList
        descriptions={projectTechnologies}
        onUpdateDescriptions={setProjectTechnologies}
        header="Project Technologies:"
        addButtonText="Add Technology"
      />
      <div className="center-div">
        <button onClick={handleAddProject} className="preview-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProjectInputs;
