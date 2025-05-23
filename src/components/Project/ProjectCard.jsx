import { React, useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";
import ProjectList from "./ProjectList";

const ProjectCard = ({ projects, onUpdateProjects }) => {
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
    <div className="input-card">
      <ProjectList projects={projects} onUpdateProjects={onUpdateProjects} />
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

      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default ProjectCard;
