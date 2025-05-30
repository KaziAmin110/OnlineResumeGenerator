import SectionInputs from "../SectionInputs";
import ProjectList from "./ProjectList";
import ProjectInputs from "./ProjectInputs";

const ProjectCard = ({ projects, onUpdateProjects }) => {
  return (
    <div className="input-card">
      <ProjectList projects={projects} onUpdateProjects={onUpdateProjects} />
      <SectionInputs
        experiences={projects}
        onUpdateExperiences={onUpdateProjects}
        sectionTitle={"Project"}
      >
        <ProjectInputs
          projects={projects}
          onUpdateProjects={onUpdateProjects}
        />
      </SectionInputs>
    </div>
  );
};

export default ProjectCard;
