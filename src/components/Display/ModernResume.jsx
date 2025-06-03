import React from "react";
import "./ModernResume.css";

const ModernResume = React.forwardRef(
  ({ personalInfo, experiences, technicalSkillsHeaders }, ref) => {
    const { name, email, phone, linkedIn } = personalInfo || {};
    const { uniName, uniGpa, uniProgram, uniGraduation } = personalInfo || {};

    return (
      <div className="mr-container" ref={ref}>
        {/* Header Section */}
        <header className="mr-header">
          <h1 className="mr-applicant-name">{name}</h1>
          <div className="mr-contact-info">
            <span>{linkedIn}</span>
            <span> • </span>
            <a href={`mailto:${email}`}>{email}</a>
            <span> • </span>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mr-section mr-summary-section">
          <p className="mr-summary-text">Summary</p>
        </section>

        {/* Relevant Skills Section */}
        <section className="mr-section mr-relevant-skills-section">
          <h2 className="mr-section-title">Relevant Skills</h2>
          <div className="mr-skills-content">
            {technicalSkillsHeaders &&
              technicalSkillsHeaders.map((skillCategory) => (
                <div
                  key={skillCategory.sectionName}
                  className="mr-skill-category-block"
                >
                  <h3 className="mr-skill-category-name">
                    {skillCategory.sectionName}
                  </h3>
                  <ul className="mr-skills-list">
                    {skillCategory.sectionSkills.map((skill, index) => (
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
            {experiences &&
              experiences.map((job, index) => (
                <div key={index} className="mr-job-entry">
                  <span className="mr-job-title">{job.jobTitle}</span>,{" "}
                  <span className="mr-company-name">{job.companyName}</span>,{" "}
                  <span className="mr-company-location">{job.companyLocation}</span>{" "}
                  <span className="mr-job-dates">{job.startDate} - {job.endDate}</span>
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
                {uniName}, {uniGraduation}
              </h3>
              <p className="mr-degree-details">{uniProgram}</p>
              <p className="mr-graduation-details">
                {uniGraduation}
                {uniGpa && ` (GPA: ${uniGpa})`}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

export default ModernResume;
