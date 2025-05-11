import React from "react";

const ProjectCard = ({ projects, onUpdateProjects }) => {
  const [projectTitle, setJobTitle] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  const handleChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return <div>ProjectCard</div>;
};

export default ProjectCard;
