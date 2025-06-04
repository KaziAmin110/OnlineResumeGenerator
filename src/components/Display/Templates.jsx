import React from "react";

const Templates = ({
  onUpdateTempIndex,
  handleDownloadPdf,
  isLoading,
  onUpdateTemplateIndex,
}) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTempIndex(templateNum);
    onUpdateTemplateIndex(templateNum);
  };

  return (
    <div className="template-container">
      <h1>Templates</h1>
      <div className="temp-buttons-container">
        <button
          className="template-btn"
          onClick={() => handleUpdateTemplate(1)}
        >
          Jake's Resume
        </button>
        <button
          className="template-btn"
          onClick={() => handleUpdateTemplate(2)}
        >
          Modern Resume
        </button>
      </div>
      <button
        className="download-btn"
        onClick={handleDownloadPdf}
        disabled={isLoading}
      >
        {isLoading ? "Downloading..." : "Download"}
      </button>
    </div>
  );
};

export default Templates;
