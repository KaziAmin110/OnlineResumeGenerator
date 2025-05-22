import React from "react";
import Project from "./Project";

const ProjectList = ({ projects, onUpdateProjects }) => {
  return (
    <div className="experience-list">
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            project={project}
            projects={projects}
            onUpdateProjects={onUpdateProjects}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
