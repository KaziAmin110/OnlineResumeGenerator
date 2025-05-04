import React, { use } from "react";
import { useState } from "react";
import UserInfo from "./components/UserInfo";
import Display from "./components/Display";
import EducationInfo from "./components/EducationInfo";

const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [userUniversity, setUserUniversity] = useState("");
  const [userGpa, setUserGpa] = useState("");

  const handleChangeName = (newValue) => {
    setNameInput(newValue);
  };

  const handleChangeEmail = (newValue) => {
    setEmailInput(newValue);
  };

  const handleChangePhone = (newValue) => {
    setPhoneInput(newValue);
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
      <EducationInfo />
      <Display name={nameInput} email={emailInput} phone={phoneInput} />
    </div>
  );
};

export default App;
