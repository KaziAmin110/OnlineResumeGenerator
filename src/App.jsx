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
  });

  const [userUniversity, setUserUniversity] = useState("");
  const [userGpa, setUserGpa] = useState("");
  const [experiences, setExperiences] = useState([]);
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

  const handleChangeUni = (newUni) => {
    setUserUniversity(newUni);
  };

  const handleChangeGpa = (newGpa) => {
    setUserGpa(newGpa);
  };

  return (
    <div>
      <Section section_name="Personal Section">
        <PersonalCard
          nameInput={nameInput}
          emailInput={emailInput}
          phoneInput={phoneInput}
          onNameChange={handleChangeName}
          onEmailChange={handleChangeEmail}
          onPhoneChange={handleChangePhone}
        />
      </Section>

      <Section section_name="Education Section">
        <EducationCard
          university={userUniversity}
          gpa={userGpa}
          changeUniversityInput={handleChangeUni}
          changeGpaInput={handleChangeGpa}
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
        name={nameInput}
        email={emailInput}
        phone={phoneInput}
        university={userUniversity}
        gpa={userGpa}
        experiences={experiences}
      />
    </div>
  );
};

export default App;
