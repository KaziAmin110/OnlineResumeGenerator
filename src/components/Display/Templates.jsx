import React from "react";

const Templates = ({ onUpdateTempIndex, handleDownloadPdf, isLoading }) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTempIndex(templateNum);
  };

  return (
    <div className="template-container">
      <h2>Templates:</h2>
      <div className="temp-buttons-container">
        <button className="template-btn" onClick={() => handleUpdateTemplate(1)}>
          Jake's Resume
        </button>
        <button className="template-btn" onClick={() => handleUpdateTemplate(2)}>
          Modern Resume
        </button>
        <button
          className="download-btn"
          onClick={handleDownloadPdf}
          disabled={isLoading}
        >
          {isLoading ? "Downloading..." : "Download"}
        </button>
      </div>
    </div>
  );
};

export default Templates;
