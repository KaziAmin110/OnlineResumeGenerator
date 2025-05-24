import React from "react";
import { QRCodeSVG } from "qrcode.react";

const JakesResumeDisplay = React.forwardRef(
  ({ personalInfo, experiences, projects, technicalSkillsHeaders }, ref) => {
    const {
      name,
      email,
      phone,
      uniName,
      uniGpa,
      linkedIn,
      uniProgram,
      uniGraduation,
    } = personalInfo;

    return (
      <div className="resume-container" ref={ref}>
        <header id="resume-header">
          <div className="header-content">
            <div></div>
            <h1 className="name">{name}</h1>
            <QRCodeSVG
              value={linkedIn}
              size={40}
              level="H"
              includeMargin={true}
            />
          </div>
          <div className="contact-info">
            <div className="contact-section">
              <strong>Email: </strong>
              <a href={"mailto:" + email} className="header-info">
                {email}
              </a>{" "}
            </div>

            <div className="contact-section">
              <strong>Phone: </strong>
              <a href={"tel:" + phone}>{phone}</a>
            </div>

            <div className="contact-section">
              <strong>Linkedin: </strong>
              <a
                href="https://linkedin.com/in/kazi-amin"
                target="_blank"
                rel="noopener noreferrer"
                className="header-info"
              >
                {linkedIn}
              </a>
            </div>
          </div>
        </header>

        <section id="education" className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="entry">
              <div className="entry-header-between">
                <h3 className="entry-title">{uniName}</h3>
                <span className="entry-meta">
                  <strong>Graduation: {uniGraduation}</strong>
                </span>
              </div>
              <div className="split-between">
                <p className="degree">
                  <em>{uniProgram}</em>
                </p>
                <p className="gpa">GPA: {uniGpa}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work-experience" className="resume-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-content">
            {experiences.map((experience) => {
              return (
                <div className="entry" key={experience.jobTitle}>
                  <div className="entry-header-between">
                    <h3 className="entry-title">{experience.jobTitle}</h3>
                    <span className="entry-meta">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                  <div className="split-between company-location">
                    <p className="company-name">{experience.companyName}</p>
                    <p className="company-city">{experience.companyLocation}</p>
                  </div>

                  <ul className="details-list">
                    {experience.descriptions.map((description, index) => {
                      return <li key={index}>{description}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            {projects.map((project) => {
              return (
                <div className="entry" key={project.projectTitle}>
                  <div className="entry-header-start">
                    <h3 className="entry-title">{project.projectTitle}</h3>
                    <h3 className="entry-divider"> | </h3>
                    <p className="project-tech">
                      {project.projectTechnologies.map((technology, index) => {
                        return (
                          <span key={index}>
                            {technology}
                            {index < project.projectTechnologies.length - 1 &&
                              ", "}
                          </span>
                        );
                      })}
                    </p>
                  </div>

                  <ul className="details-list">
                    {project.descriptions.map((description, index) => {
                      return <li key={index}>{description}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="technical-skills" className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-content">
            <div className="skills-category">
              {technicalSkillsHeaders.map((header, index) => {
                return (
                  <p key={index}>
                    <strong>{header.sectionName}</strong>: {"  "}
                    {header.sectionSkills.map((skill, index) => {
                      return (
                        <span key={index}>
                          {skill}
                          {index < header.sectionSkills.length - 1 && ", "}
                        </span>
                      );
                    })}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
);

export default JakesResumeDisplay;
