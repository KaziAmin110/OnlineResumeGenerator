import React, { useState } from "react";
import PersonalCard from "./components/Personal/PersonalCard";
import Display from "./components/Display/Display";
import EducationCard from "./components/Education/EducationCard";
import Section from "./components/Section";
import ExperienceCard from "./components/Experience/ExperienceCard";
import ProjectCard from "./components/Project/ProjectCard";
import TechSkillsCard from "./components/TechSkills/TechSkillsCard";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Kazi Amin",
    email: "kaziamin1239@gmail.com",
    phone: "561-436-0853",
    uniName: "University of Central Florida",
    uniGpa: 3.5,
  });

  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [techSections, setTechSections] = useState([]);

  return (
    <div className="main-container">
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
