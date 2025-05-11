import React from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";
import ProjectList from "./ProjectList";

const ProjectCard = ({ projects, onUpdateProjects }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  const handleChangeProjectTitle = (e) => {
    setJobTitle(e.target.value);
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
    <div>
      <ProjectList projects={projects} onUpdateProjects={onUpdateProjects} />
      <div>
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
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default ProjectCard;
