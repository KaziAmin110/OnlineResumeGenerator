const personalInfoData = {
  name: "Kazi Amin",
  email: "kaziamin1239@gmail.com",
  phone: "561-436-0853",
  uniName: "University of Central Florida",
  uniGpa: 3.5,
  uniProgram: "Bachelor of Science in Computer Science",
  uniGraduation: "May 2026",
  linkedIn: "https://www.linkedin.com/in/kazi-amin/",
  personalSummary: "Software Engineer with 2+ years of experience in Frontend and Backend Frameworks. Passionate about problem-solving and using technology as a means of adding value to businesses and consumers alike. Seeking a challenging role in the field of software development.",
};

const experiencesData = [
  {
    jobTitle: "Machine Learning Research Assistant",
    companyName: "University of Central Florida",
    companyLocation: "Orlando, FL",
    startDate: "January 2024",
    endDate: "May 2024",
    descriptions: [
      "Explored the relationship between social media platforms and network science, aiming to improve the detection of malicious accounts on social networks using anomaly-detection algorithms.",
      "Improved random forest models using gathered clustering coefficient scores to achieve an overall 15% increase in detection accuracy using scikit-learn.",
      "Performed end-to-end data lifecycle tasks in Python, including extraction, cleaning, and modeling, for weekly reports using NumPy, Pandas, and Matplotlib.",
    ],
  },
  {
    jobTitle: "Commercial Property Analytics Intern",
    companyName: "Palm Beach County Property Appraiser's Office",
    companyLocation: "West Palm Beach, FL",
    startDate: "June 2022",
    endDate: "August 2022",
    descriptions: [
      "Optimized property appraisal processes by leveraging SQL and SPSS to reduce the number of parcels requiring physical appraisal in Palm Beach County.",
      "Developed autonomous Python scripts to update pre-existing property data to ensure that over 5,000 parcels were up to date for the 2022 Property Tax Roll.",
      "Assisted commercial property appraisers in creating spreadsheets and visual diagrams of property tax increases using Excel (VLookup, Pivot Tables, Index/Match) and Tableau.",
    ],
  },
];

const projectsData = [
  {
    projectTitle: "Eventify, Backend Lead, (Ongoing)",
    projectTechnologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Jest",
      "BullMQ",
    ],
    descriptions: [
      "Developing a full-stack event management platform to help university organizations create, manage, and promote campus events with features including role-based access control, real-timemessaging, and payment processing.",
      "Building RESTful APIs using Node.js and Express.js, ensuring efficient data handling as well as increased performance by implementing Redis caching and service concurrency techniques.",
      "Managing backend sprints in Jira, facilitating weekly meetings, and enforcing test-driven development with Jest to maintain high code quality.",
    ],
  },
  {
    projectTitle: "Rate My Peer, Mobile Development Lead",
    projectTechnologies: [
      "React.js",
      "Flutter",
      "Express",
      "PostgreSQL",
      "Jest",
    ],
    descriptions: [
      "Designed and led the development of a full-stack web and mobile application to assist instructors in monitoring team dynamics and individual performances using anonymous peer reviews.",
      "Developed and optimized key mobile and web features, including real-time peer review submission, performance analytics, and user authentication, using Flutter for mobile and React.js for web.",
      "Ensured seamless backend integration with PostgreSQL and Express.js while adhering to test-driven development principles.",
    ],
  },
  {
    projectTitle: "Youtube Trending Data Analysis & ETL Pipeline",
    projectTechnologies: [
      "Python",
      "Apache Airflow",
      "Amazon EC2",
      "Amazon S3",
    ],
    descriptions: [
      "Developed an ETL Data Pipeline using Apache Airflow to extract, transform, and load YouTube trending data automatically in batch processing mode.",
      "Performed data analysis using Python (Pandas, NumPy, Matplotlib, Seaborn) to identify key traits that contribute to a video’s likelihood of being on Youtube’s Trending Page.",
      "Utilized AWS EC2 instances to deploy and manage the pipeline, leveraging Amazon S3 buckets for efficient storage and retrieval of processed datasets within the cloud.",
    ],
  },
  {
    projectTitle: "ContactVault, Frontend Lead",
    projectTechnologies: [
      "Linux",
      "Apache",
      "MySQL",
      "PHP",
      "Docker",
      "Postman",
    ],
    descriptions: [
      "Developed a secure full-stack CRUD web application enabling users to efficiently manage personal contacts using features such as user authentication and persistent, dynamic contact storage.",
      "Led the frontend team in designing and implementing the application using HTML, CSS, JavaScript, and Figma.",
      "Utilized Docker to containerize and manage front-end applications, ensuring a consistent development and deployment environment.",
    ],
  },
];

const techSectionsData = [
  {
    sectionName: "Languages & Frameworks",
    sectionSkills: [
      "React",
      "Node.js",
      "JavaScript",
      "Python",
      "Java, Express, Flutter, Jest, HTML, CSS, Dart",
    ],
  },
  {
    sectionName: "Databases",
    sectionSkills: [
      "Relational Databases (PostgreSQL, MySQL)",
      "Non-Relational Databases (MongoDB)",
    ],
  },
  {
    sectionName: "Development Tools",
    sectionSkills: [
      "Git, Github",
      "Docker",
      "Jira, Postman, Eclipse, Supabase, Heroku, Figma, Linux",
    ],
  },
];

export { personalInfoData, experiencesData, projectsData, techSectionsData };
