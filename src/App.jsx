import React, { use } from "react";
import { useState } from "react";
import UserInfo from "./components/UserInfo";
import Display from "./components/Display";
import EducationInfo from "./components/EducationInfo";
import Experience from "./components/Experience";
import ExperienceCard from "./components/ExperienceCard";

const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
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

  const handleChangeName = (newValue) => {
    setNameInput(newValue);
  };

  const handleChangeEmail = (newValue) => {
    setEmailInput(newValue);
  };

  const handleChangePhone = (newValue) => {
    setPhoneInput(newValue);
  };

  const handleChangeUni = (newUni) => {
    setUserUniversity(newUni);
  };

  const handleChangeGpa = (newGpa) => {
    setUserGpa(newGpa);
  };

  return (
    <div>
      <UserInfo
        nameInput={nameInput}
        emailInput={emailInput}
        phoneInput={phoneInput}
        onNameChange={handleChangeName}
        onEmailChange={handleChangeEmail}
        onPhoneChange={handleChangePhone}
      />
      <EducationInfo
        university={userUniversity}
        gpa={userGpa}
        changeUniversityInput={handleChangeUni}
        changeGpaInput={handleChangeGpa}
      />
      <Experience>
        <ExperienceCard
          experience={workExperience}
          onUpdateExperience={setWorkExperience}
          descriptions={workExperience.descriptions}
          onChangeExperiences={setExperiences}
        />
      </Experience>
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
