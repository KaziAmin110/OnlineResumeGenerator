import React from "react";
import "./ModernResume.css";

const ModernResume = React.forwardRef(
  ({ personalInfo, summary, relevantSkills, workHistory, education }, ref) => {
    const { name, address, email, phone } = personalInfo || {};
    const {
      universityName,
      universityLocation,
      degree,
      concentration,
      graduationDate,
      honors,
      gpa,
    } = education || {};

    return (
      <div className="mr-container" ref={ref}>
        {/* Header Section */}
        <header className="mr-header">
          <h1 className="mr-applicant-name">{name}</h1>
          <div className="mr-contact-info">
            <span>{address}</span>
            <span> • </span>
            <a href={`mailto:${email}`}>{email}</a>
            <span> • </span>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mr-section mr-summary-section">
          <p className="mr-summary-text">{summary}</p>
        </section>

        {/* Relevant Skills Section */}
        <section className="mr-section mr-relevant-skills-section">
          <h2 className="mr-section-title">Relevant Skills</h2>
          <div className="mr-skills-content">
            {relevantSkills &&
              relevantSkills.map((skillCategory) => (
                <div
                  key={skillCategory.categoryName}
                  className="mr-skill-category-block"
                >
                  <h3 className="mr-skill-category-name">
                    {skillCategory.categoryName}
                  </h3>
                  <ul className="mr-skills-list">
                    {skillCategory.skills.map((skill, index) => (
                      <li key={index} className="mr-skill-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        {/* Work History Section */}
        <section className="mr-section mr-work-history-section">
          <h2 className="mr-section-title">Work History</h2>
          <div className="mr-work-history-content">
            {workHistory &&
              workHistory.map((job, index) => (
                <div key={index} className="mr-job-entry">
                  <span className="mr-job-title">{job.title}</span>,{" "}
                  <span className="mr-company-name">{job.company}</span>,{" "}
                  <span className="mr-company-location">{job.location}</span>{" "}
                  <span className="mr-job-dates">({job.dates})</span>
                </div>
              ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mr-section mr-education-section">
          <h2 className="mr-section-title">Education</h2>
          <div className="mr-education-content">
            <div className="mr-education-entry">
              <h3 className="mr-institution-name">
                {universityName}, {universityLocation}
              </h3>
              <p className="mr-degree-details">
                {degree} {concentration && `(concentration: ${concentration})`}
              </p>
              <p className="mr-graduation-details">
                {graduationDate}
                {honors && `, Honors: ${honors}`}
                {gpa && ` (GPA: ${gpa})`}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

export default ModernResume;
