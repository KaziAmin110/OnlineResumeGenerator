import React, { useEffect } from "react";
import "./ModernResume.css";

const ModernResume = React.forwardRef(
  (
    { personalInfo, experiences, technicalSkillsHeaders, setIsResumeOverflow },
    ref
  ) => {
    const { name, email, phone, linkedIn, personalSummary } =
      personalInfo || {};
    const { uniName, uniGpa, uniProgram, uniGraduation } = personalInfo || {};

    // Effect to check if the resume content overflows
    useEffect(() => {
      const resumeElement = ref.current;
      const isOverflowing =
        resumeElement.scrollHeight > resumeElement.clientHeight ||
        resumeElement.scrollWidth > resumeElement.clientWidth;
      setIsResumeOverflow(isOverflowing);
    }, [
      personalInfo,
      experiences,
      technicalSkillsHeaders,
      setIsResumeOverflow,
      ref,
    ]);

    return (
      <div className="resume-container-mr" ref={ref}>
        <header className="resume-header-mr">
          <div className="header-top-border-mr"></div>
          <h1>{name}</h1>
          <div className="contact-info-mr">
            <span>{email}</span>
            <span>&bull;</span>
            <span>{phone}</span>
            <span>&bull;</span>
            <span>{linkedIn}</span>
            {/* <span>twitter.com/Richard_Williams</span> Or website */}
          </div>
          <p className="header-summary-mr">{personalSummary}</p>
        </header>

        <hr className="section-divider-mr" />

        <section className="resume-section-mr">
          <h3>EXPERIENCE</h3>

          {experiences.map((experience) => {
            return (
              <div className="experience-item-mr" key={experience.jobTitle}>
                <div className="experience-header-mr">
                  <h4>{experience.companyName}</h4>
                  <span>{experience.companyLocation}</span>
                </div>
                <div className="experience-subheader-mr">
                  <h5>{experience.jobTitle}</h5>
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
                <ul>
                  {experience.descriptions.map((description, index) => {
                    return <li key={index}>{description}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </section>

        <hr className="section-divider-mr" />

        <section className="resume-section-mr">
          <h3>EDUCATION</h3>
          <div className="education-item-mr">
            <div className="education-header-mr">
              <h4>{uniProgram}</h4>
              <span>GPA: {uniGpa}</span>
            </div>
            <div className="education-subheader-mr">
              {/* Corrected from image for better readability */}
              <h5>{uniName}</h5>{" "}
              {/* Corrected from image for better readability */}
              <span>{uniGraduation}</span>
            </div>
          </div>
        </section>

        <hr className="section-divider-mr" />

        <section className="resume-section-mr">
          <h3>SKILLS</h3>
          <ul className="skills-list-mr">
            {technicalSkillsHeaders.map((header, index) => {
              return <li key={index}>{header.sectionSkills}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
);

export default ModernResume;
