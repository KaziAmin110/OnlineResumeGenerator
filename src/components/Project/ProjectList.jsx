import React from "react";
import Project from "./Project";

const ProjectList = ({ projects, onUpdateProjects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        return <Project key={index}/>;
      })}
    </div>
  );
};

export default ProjectList;
