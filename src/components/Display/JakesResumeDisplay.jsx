import React from "react";

const JakesResumeDisplay = ({
  personalInfo,
  experiences,
  projects,
  technicalSkillsHeaders,
}) => {
  const { name, email, phone, uniName, uniGpa, linkedIn } = personalInfo;

  return (
    <div className="resume-container">
      <header id="resume-header">
        <h1 className="name">{name}</h1>
        <p className="contact-info">
          <a href="mailto:kaziamin1239@gmail.com" className="header-info">
            <strong>Email: </strong>
            {email}
          </a>{" "}
          -- <strong>Phone: </strong>
          {phone} -- {" "}
          <a
            href="https://linkedin.com/in/kazi-amin"
            target="_blank"
            rel="noopener noreferrer"
            className="header-info"
          >
            <strong>Linkedin: </strong>
            {linkedIn}
          </a>
        </p>
      </header>

      <section id="education" className="resume-section">
        <h2 className="section-title">EDUCATION</h2>
        <div className="section-content">
          <div className="entry">
            <div className="entry-header">
              <h3 className="entry-title">University of Central Florida</h3>
              <span className="entry-meta">Graduation: May 2026</span>
            </div>
            <p className="degree">Bachelor of Science in Computer Science</p>
            <p className="gpa">GPA: 3.5</p>
            <ul className="details-list">
              <li>
                Academic Achievements: UCF Provost Scholar, Florida Academic
                Scholar
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work-experience" className="resume-section">
        <h2 className="section-title">WORK EXPERIENCE</h2>
        <div className="section-content">
          <div className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                Machine Learning Research Assistant
              </h3>
              <span className="entry-meta">January 2024 - May 2024</span>
            </div>
            <p className="company-location">
              University of Central Florida | Orlando, FL
            </p>
            <ul className="details-list">
              <li>
                Explored the relationship between social media platforms and
                network science, aiming to improve the detection of malicious
                accounts on social networks using anomaly-detection algorithms.
              </li>
              <li>
                Improved random forest models using gathered clustering
                coefficient scores to achieve an overall 15% increase in
                detection accuracy using scikit-learn.
              </li>
              <li>
                Performed end-to-end data lifecycle tasks in Python, including
                extraction, cleaning, and modeling, for weekly reports using
                NumPy, Pandas, and Matplotlib.
              </li>
            </ul>
          </div>
          <div className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                Commercial Property Analytics Intern
              </h3>
              <span className="entry-meta">June 2022 - August 2022</span>
            </div>
            <p className="company-location">
              Palm Beach County Property Appraiser's Office | West Palm Beach,
              FL
            </p>
            <ul className="details-list">
              <li>
                Optimized property appraisal processes by leveraging SQL and
                SPSS to reduce the number of parcels requiring physical
                appraisal in Palm Beach County.
              </li>
              <li>
                Developed autonomous Python scripts to update pre-existing
                property data to ensure that over 5,000 parcels were up to date
                for the 2022 Property Tax Roll.
              </li>
              <li>
                Assisted commercial property appraisers in creating spreadsheets
                and visual diagrams of property tax increases using Excel
                (VLookup, Pivot Tables, Index/Match) and Tableau.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-content">
          <div className="entry project-entry">
            <h3 className="entry-title">Eventify, Backend Lead (Ongoing)</h3>
            <p className="project-tech">
              Node.js, Express.js, PostgreSQL, Redis, Jest, BullMQ
            </p>
            <ul className="details-list">
              <li>
                Developing a full-stack event management platform to help
                university organizations create, manage, and promote campus
                events with features like role-based access control, messaging,
                and payment processing.
              </li>
              <li>
                Building RESTful APIs using Node.js and Express.js, ensuring
                efficient data handling as well as increased performance by
                implementing Redis caching and service concurrency techniques.
              </li>
              <li>
                Managing backend sprints in Jira, facilitating weekly meetings,
                and enforcing test-driven development with Jest to maintain high
                code quality.
              </li>
            </ul>
          </div>
          <div className="entry project-entry">
            <h3 className="entry-title">
              Rate My Peer, Mobile Development Lead
            </h3>
            <p className="project-tech">
              React.js, Flutter, Express, PostgreSQL, Jest
            </p>
            <ul className="details-list">
              <li>
                Designed and led the development of a full-stack web and mobile
                application to assist instructors in monitoring team dynamics
                and individual performances using anonymous peer reviews.
              </li>
              <li>
                Developed and optimized key mobile and web features, including
                real-time peer review submission, performance analytics, and
                user authentication, using Flutter for mobile and React.js for
                web.
              </li>
              <li>
                Ensured seamless backend integration with PostgreSQL and
                Express.js while adhering to test-driven development principles.
              </li>
            </ul>
          </div>
          <div className="entry project-entry">
            <h3 className="entry-title">
              YouTube Trending Data Analytics & ETL Pipeline
            </h3>
            <p className="project-tech">
              Python, Apache Airflow, Amazon EC2, Amazon S3
            </p>
            <ul className="details-list">
              <li>
                Developed an ETL Data Pipeline using Apache Airflow to extract,
                transform, and load YouTube trending data automatically in batch
                processing mode.
              </li>
              <li>
                Performed data analysis using Python (Pandas, NumPy, Matplotlib,
                Seaborn) to identify key traits that contribute to a video's
                likelihood of being on Youtube's Trending Page.
              </li>
              <li>
                Utilized AWS EC2 instances to deploy and manage the pipeline,
                leveraging Amazon S3 buckets for efficient storage and retrieval
                of processed datasets within the cloud.
              </li>
            </ul>
          </div>
          <div className="entry project-entry">
            <h3 className="entry-title">Contact Vault, Frontend Lead</h3>
            <p className="project-tech">
              Linux, Apache, MySQL, PHP, Docker, Postman
            </p>
            <ul className="details-list">
              <li>
                Developed a secure full-stack CRUD web application enabling
                users to efficiently manage personal contacts using features
                such as user authentication and persistent, dynamic contact
                storage.
              </li>
              <li>
                Led the frontend team in designing and implementing the
                application using HTML, CSS, JavaScript, and Figma.
              </li>
              <li>
                Utilized Docker to containerize and manage front-end
                applications, ensuring a consistent development and deployment
                environment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="technical-skills" className="resume-section">
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        <div className="section-content">
          <div className="skills-category">
            <p>
              <strong>Languages & Frameworks:</strong> React.js, Express.js,
              Node.js, Javascript, Flutter, Jest, HTML, CSS, Dart
            </p>
          </div>
          <div className="skills-category">
            <p>
              <strong>Databases:</strong> Relational Databases (PostgreSQL,
              MySQL), Non-relational Databases (MongoDB)
            </p>
          </div>
          <div className="skills-category">
            <p>
              <strong>Developer Tools:</strong> Git, GitHub, Figma, VS Code,
              Linux, Eclipse, Postman, Supabase, Heroku, Docker, Jira
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JakesResumeDisplay;
