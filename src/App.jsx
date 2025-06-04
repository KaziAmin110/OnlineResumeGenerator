import React, { useState } from "react";
import PersonalCard from "./components/Personal/PersonalCard";
import Display from "./components/Display/Display";
import EducationCard from "./components/Education/EducationCard";
import Section from "./components/Section";
import ExperienceCard from "./components/Experience/ExperienceCard";
import ProjectCard from "./components/Project/ProjectCard";
import TechSkillsCard from "./components/TechSkills/TechSkillsCard";
import {
  personalInfoData,
  experiencesData,
  projectsData,
  techSectionsData,
} from "./data/resume";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(personalInfoData);
  const [experiences, setExperiences] = useState(experiencesData);
  const [projects, setProjects] = useState(projectsData);
  const [techSections, setTechSections] = useState(techSectionsData);
  const [templateIndex, setTemplateIndex] = useState(1);

  return (
    <div className="main-container">
      <div className="input-sections-container">
        <Section section_name="Personal Section">
          <PersonalCard
            personalInfo={personalInfo}
            onUpdatePersonalInfo={setPersonalInfo}
            templateIndex={templateIndex}
          />
        </Section>

        <Section section_name="Education Section">
          <EducationCard
            personalInfo={personalInfo}
            onUpdateUniversityInfo={setPersonalInfo}
          />
        </Section>

        <Section section_name="Experience Section">
          <ExperienceCard
            experiences={experiences}
            onUpdateExperiences={setExperiences}
          />
        </Section>

        <Section section_name="Project Section">
          <ProjectCard projects={projects} onUpdateProjects={setProjects} />
        </Section>

        <Section section_name="Technical Skills Section">
          <TechSkillsCard
            techSections={techSections}
            onUpdateTechSections={setTechSections}
          />
        </Section>
      </div>
      <div className="resizer"></div>
      <Display
        personalInfo={personalInfo}
        experiences={experiences}
        projects={projects}
        techSkillsHeaders={techSections}
        onUpdateTemplateIndex={setTemplateIndex}
      />
    </div>
  );
};

export default App;
