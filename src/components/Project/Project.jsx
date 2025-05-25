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
    <div className="experience-card">
      <div className="preview-buttons">
        {isEditing && (
          <button onClick={handleSaveProject} className="save-btn">
            Save
          </button>
        )}

        <button onClick={handleToggleEdit} className="preview-button">
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button onClick={handleRemoveProject} className="preview-button">
          Remove
        </button>
      </div>

      {isEditing ? (
        <div className="preview-container">
          <h3>Enter Project Title:</h3>
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
        <div className="preview-container">
          <h1>{project.projectTitle}</h1>
        </div>
      )}
    </div>
  );
};

export default Project;
