import React, { use } from "react";
import { useState } from "react";
import UserInfo from "./components/UserInfo";
import Display from "./components/Display";
import EducationInfo from "./components/EducationInfo";
import Experience from "./components/Experience";

const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [userUniversity, setUserUniversity] = useState("");
  const [userGpa, setUserGpa] = useState("");
  const [workExperience, setWorkExperience] = useState({});

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
      <Experience />
      <Display
        name={nameInput}
        email={emailInput}
        phone={phoneInput}
        university={userUniversity}
        gpa={userGpa}
      />
    </div>
  );
};

export default App;
