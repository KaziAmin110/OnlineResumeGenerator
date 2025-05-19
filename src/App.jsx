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
    linkedIn: "linkedin.com/in/kazi-amin/",
  });

  const [experiences, setExperiences] = useState([
    {
      jobTitle: "Software Engineer Intern",
      companyName: "Google",
      companyLocation: "Mountain View, CA",
      startDate: "June 2023",
      endDate: "August 2023",
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
    {
      jobTitle: "Software Engineer Intern",
      companyName: "Google",
      companyLocation: "Mountain View, CA",
      startDate: "June 2023",
      endDate: "August 2023",
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
    {
      jobTitle: "Software Engineer Intern",
      companyName: "Google",
      companyLocation: "Mountain View, CA",
      startDate: "June 2023",
      endDate: "August 2023",
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      projectTitle: "Project 1",
      projectTechnologies: ["React", "Node.js"],
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
    {
      projectTitle: "Project 2",
      projectTechnologies: ["React", "Node.js"],
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
    {
      projectTitle: "Project 3",
      projectTechnologies: ["React", "Node.js"],
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
    {
      projectTitle: "Project 4",
      projectTechnologies: ["React", "Node.js"],
      descriptions: [
        "Worked on a team to develop a new feature for Google Maps.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Implemented the feature using React and Node.js.",
      ],
    },
  ]);
  const [techSections, setTechSections] = useState([
    {
      sectionName: "Languages & Frameworks",
      sectionSkills: [
        "React",
        "Node.js",
        "JavaScript",
        "Python",
        "Java, Express, Flutter, Jest, HTML, CSS, Dart",
      ],
    },
    {
      sectionName: "Databases",
      sectionSkills: [
        "Relational Databases (PostgreSQL, MySQL)",
        "Non-Relational Databases (MongoDB)",
      ],
    },
    {
      sectionName: "Development Tools",
      sectionSkills: [
        "Git, Github",
        "Docker",
        "Jira, Postman, Eclipse, Supabase, Heroku, Figma, Linux",
      ],
    },
  ]);

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
