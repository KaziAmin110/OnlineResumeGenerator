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

  return (
    <div className="main-container">
      <div className="input-sections-container">
        <h1 className="title">Resume Builder</h1>
        <Section section_name="Personal Section">
          <PersonalCard
            personalInfo={personalInfo}
            onUpdatePersonalInfo={setPersonalInfo}
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

        <Section section_name="Technical Section">
          <TechSkillsCard
            techSections={techSections}
            onUpdateTechSections={setTechSections}
          />
        </Section>
      </div>
      <Display
        personalInfo={personalInfo}
        experiences={experiences}
        projects={projects}
        techSkillsHeaders={techSections}
      />
    </div>
  );
};

export default App;
