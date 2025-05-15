import React from "react";

const Templates = ({ onUpdateTempIndex }) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTempIndex(templateNum);
  };

  return (
    <div>
      <h2>Templates:</h2>
      <button class="" onClick={() => handleUpdateTemplate(1)}>
        Jake's Resume
      </button>
      <button class="" onClick={() => handleUpdateTemplate(2)}>
        Modern Resume
      </button>
    </div>
  );
};

export default Templates;
