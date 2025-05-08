import React, { use } from "react";
import { useState } from "react";
import PersonalCard from "./components/PersonalCard";
import Display from "./components/Display";
import EducationCard from "./components/EducationCard";
import Section from "./components/Section";
import ExperienceCard from "./components/ExperienceCard";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Kazi Amin",
    email: "kaziamin1239@gmail.com",
    phone: "561-436-0853",
    uni_name: "University of Central Florida",
    uni_gpa: 3.5,
  });

  const [workExperience, setWorkExperience] = useState({
    job_title: "Software Engineer",
    company_name: "Microsoft",
    start_date: "5/1/2022",
    end_date: "8/1/2022",
    descriptions: [
      "Worked on React Project",
      "Added Backend Functionality",
      "Created Reverse Proxy Server",
    ],
  });
  const [experiences, setExperiences] = useState([]);

  return (
    <div>
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
          experience={workExperience}
          onUpdateExperience={setWorkExperience}
          descriptions={workExperience.descriptions}
          onChangeExperiences={setExperiences}
        />
      </Section>

      <Display
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        university={personalInfo.uni_name}
        gpa={personalInfo.gpa}
        experiences={experiences}
      />
    </div>
  );
};

export default App;
