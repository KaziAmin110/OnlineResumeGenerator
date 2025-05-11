import React, { useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";

const Project = ({ project, projects, onUpdateProjects, index }) => {
  const [projectInputs, setProjectInputs] = useState({
    projectTitle: project.projectTitle,
    projectTechnologies: project.projectTechnologies,
    descriptions: project.descriptions,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [projectTechnologies, setProjectTechnologies] = useState(
    project.projectTechnologies
  );
  const [descriptions, setDescriptions] = useState(project.descriptions);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const removeCurrentProject = () => {
    return projects.filter((project, currentIndex) => currentIndex != index);
  };

  const handleRemoveProject = () => {
    onUpdateProjects(removeCurrentProject);
  };

  const handleChangeInput = (e, inputName) => {
    setProjectInputs({
      ...projectInputs,
      [inputName]: e.target.value,
    });
  };

  const updateCurrentProject = () => {
    return projects.map((project, currentIndex) => {
      if (currentIndex == index) {
        return { ...projectInputs, projectTechnologies, descriptions };
      } else {
        return project;
      }
    });
  };

  const handleSaveProject = () => {
    setIsEditing(!isEditing);
    onUpdateProjects(updateCurrentProject);
  };

  return (
    <div>
      {isEditing && <button onClick={handleSaveProject}>Save</button>}{" "}
      <button onClick={handleToggleEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleRemoveProject}>Remove</button>
      {isEditing ? (
        <div>
          <input
            value={projectInputs.projectTitle}
            onChange={(e) => handleChangeInput(e, "projectTitle")}
          ></input>
          <DescriptionList
            header="Project Descriptions:"
            descriptions={descriptions}
            onUpdateDescriptions={setDescriptions}
          />
          <DescriptionList
            header="Project Technologies:"
            descriptions={projectTechnologies}
            onUpdateDescriptions={setProjectTechnologies}
            addButtonText="Add Technology"
          />
        </div>
      ) : (
        <div>
          <h1>{project.projectTitle}</h1>
          <h1>{project.descriptions}</h1>
          <h1>{project.projectTechnologies}</h1>
        </div>
      )}
    </div>
  );
};

export default Project;
