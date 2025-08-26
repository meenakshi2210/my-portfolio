import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const skillVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "backOut" }
  }
};

export default function Resume() {
  const skills = [
    { name: "Java", level: 90, icon: "☕" },
    { name: "Python", level: 60, icon: "🐍" },
    { name: "React.js", level: 70, icon: "⚛️" },
    { name: "Node.js", level: 70, icon: "🟢" },
    { name: "MongoDB ", level: 70, icon: "🍃" },
    { name: "AWS", level: 60, icon: "☁️" },
    { name: "Unity AR", level: 40, icon: "🥽" },
    { name: "Figma", level: 75, icon: "🎨" },
    { name: "Android", level: 80, icon: "🤖" }
  ];

  const experiences = [
    {
      "title": "Student Intern – R&D",
      "company": "Nokia",
      "period": "August 2025 – Present",
      "type": "Internship",
      "achievements": [
        "Working on advanced networking solutions",
        "Exploring and implementing cloud infrastructure strategies",
        "Gaining hands-on experience with 5G technology",
        "Contributing to cloud-native application development and optimization"
      ],
      "tags": ["Networking", "Cloud Infrastructure", "5G", "Cloud Native", "Kubernetes", "Docker", "Linux", "Telecom R&D"]
    },
    {
      title: "Creative Tech Developer Intern / Technical Content Lead",
      company: "Annuvrittiksha Pvt Ltd",
      period: "June 2024 – May 2025",
      type: "Internship",
      achievements: [
        "Worked with AWS Polly, S3, Jira, DynamoDB",
        "Created videos, handled ETL, scripting",
        "Improved system efficiency by 25%"
      ],
      tags: ["AWS", "DynamoDB", "ETL", "Scripting"]
    },
    {
      title: "Android Development Training",
      company: "Self-Directed Learning",
      period: "June 2024",
      type: "Training",
      achievements: [
        "Firebase Auth, API integration",
        "Built Elearn, News API, Home Decor apps",
        "Mastered modern Android development"
      ],
      tags: ["Android", "Firebase", "API", "Mobile Development"]
    }
  ];

  const projects = [
    {
      name: "Zoomagine",
      description: "Unity AR app for biodiversity awareness used in schools, museums, and events. Advanced visuals for engaging learning. Interaction with Top Zoologists, Geographers, and Environmentalists.",
      status: "Patented",
      tech: ["Unity", "C#", "AR/VR"],
      impact: "🏆 Patent Granted"
    },
    {
      name: "Cronicle",
      description: "Android app for cultural preservation and increase Local Vendors Economy. Allows users to explore local culture, traditions, and vendors. Advanced AI Features for multilingual support and personalized recommendations.",
      status: "Patent Pending",
      tech: ["Java", "Firebase", "Android"],
      impact: "📋 Patent in Process"
    },
    {
      name: "HowToAlgo",
      description: "Platform to enhance your coding skills on DSA, System Design, DSA Concepts. Weekly Contests and Leaderboard to track progress. Systematic learning path for beginners to advanced coders.",
      status: "Completed",
      tech: ["React", "Node.js", "MongoDB", "DSA"],
      impact: "💻 Coding Skills Enhancement"
    },
    {
      "name": "ELearn Digital Classes",
      "description": "Android application for CBSE students (Class 6–12) offering complete syllabus coverage, digital textbooks, Q&A, practice papers, and interactive learning modules.",
      "status": "Completed",
      "tech": ["Android Studio", "Java", "Firebase", "SQLite"],
      "impact": "📱 Digital Learning for Students"
    }

  ];

  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "CGC Landran",
      period: "2022–2026",
      grade: "8.89 CGPA",
      status: "current"
    },
    {
      degree: "12th CBSE",
      institution: "Shivalik School",
      period: "2020–2022",
      grade: "90.2%",
      status: "completed"
    },
    {
      degree: "10th ICSE",
      institution: "Mount Carmel School",
      period: "2011–2020",
      grade: "95.4%",
      status: "completed"
    }
  ];

  const achievements = {
    academic: [
      {
        title: "National Science Day 2023",
        description: "Secured second position for math project display",
        year: "2023",
        icon: "🥈"
      },
      {
        title: "Engineers Day 2024",
        description: "Secured third position for project display",
        year: "2024",
        icon: "🥉"
      },
      {
        title: "Smart India Hackathon",
        description: "Participated in internal competition twice",
        year: "2023-2024 & 2024-2025",
        icon: "💡"
      },
      {
        title: "InnoSprint Hackathon",
        description: "Participated at CGC Janjheri hackathon",
        year: "2023",
        icon: "🚀"
      }
    ],
    certifications: [
      {
        title: "Science Day Project Display Competition",
        issuer: "Educational Institution",
        year: "2023",
        icon: "🏆"
      },
      {
        title: "AWS Cloud Engineer Certificate",
        issuer: "Amazon Web Services",
        year: "2024",
        icon: "☁️"
      },
      {
        title: "AWS Data Engineer Certificate",
        issuer: "Amazon Web Services",
        year: "2024",
        icon: "📊"
      },
      {
        title: "AWS Cloud Security Certificate",
        issuer: "Amazon Web Services",
        year: "2024",
        icon: "🔒"
      },
      {
        title: "NPTEL Java Programming",
        issuer: "NPTEL",
        score: "70%",
        year: "2024",
        icon: "☕"
      },
      {
        title: "NPTEL Database Management",
        issuer: "NPTEL",
        score: "57%",
        year: "2024",
        icon: "🗄️"
      },
      {
        title: "Event Head Coordinator at RISE",
        issuer: "RISE Startup Events",
        year: "2024",
        icon: "🎯"
      },
      {
        title: "Salesforce Launchpad Program",
        issuer: "PWC",
        year: "2025",
        icon: "🏆"
      },
      {
        title: "Academy Automation Explorer Training",
        issuer: "Ui Path Academy",
        year: "2025",
        icon: "🎯"
      }
    ],
    extraCurricular: [
      {
        title: "NCC Cadet",
        description: "C Certificate Holder",
        year: "2017-2018",
        icon: "👏"
      },
      {
        title: "Code-Fillas Coding Event",
        description: "Participated in competitive coding event",
        year: "2024",
        icon: "💻"
      },
      {
        title: "Clap To Code Event",
        description: "Participated in coding competition",
        year: "2024",
        icon: "👏"
      },
      {
        title: "Google's Girl Hackathon",
        description: "Participated in Google's diversity hackathon",
        year: "2024",
        icon: "👩‍💻"
      }
    ]
  };

  return (
    <motion.div 
      className="resume-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.header className="resume-header" variants={itemVariants}>
        <div className="header-content">
          <div className="profile-section">
            <motion.div 
              className="profile-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/IMG20240921224035.jpg"
                alt="Meenakshi"
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </motion.div>
            <div className="profile-info">
              <motion.h1 
                className="profile-name"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Meenakshi
              </motion.h1>
              <motion.p 
                className="profile-title"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Computer Science Engineer
              </motion.p>
              <motion.p 
                className="profile-tagline"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Passionate about crafting innovative tech solutions
              </motion.p>
            </div>
          </div>
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <div className="contact-links">
              <span className="contact-icon">📍</span>
              <span>Nangal, Punjab</span>
            </div>
            <div className="contact-links">
              <span className="contact-icon">📧</span>
              <span>meenakshi20922@gmail.com</span>
            </div>
            <div className="contact-links">
              <span className="contact-icon">📱</span>
              <span>+91 7889107694</span>
            </div>
            <div className="contact-links">
              <a href="https://linkedin.com/in/meenakshi-mehra-6b366b204" target="_blank" rel="noreferrer" className="contact-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com/meenakshi2210" target="_blank" rel="noreferrer" className="contact-link">
                👨‍💻 GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="resume-main">
        {/* Left Column */}
        <div className="resume-left">
          {/* About Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">👋</span>
              About Me
            </h2>
            <p className="about-text">
              A passionate and focused CSE undergraduate with strong leadership, problem-solving, 
              and creative skills. I'm dedicated to crafting polished tech solutions while always 
              learning and adapting to new technologies and challenges.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">🚀</span>
              Technical Skills
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Languages Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">🌍</span>
              Languages
            </h2>
            <div className="languages-list">
              {["English", "Hindi", "Punjabi"].map((language) => (
                <motion.div 
                  key={language}
                  className="language-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {language}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="resume-right">
          {/* Education Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">🎓</span>
              Education
            </h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item ${edu.status}`}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <p className="timeline-subtitle">{edu.institution}</p>
                    <div className="timeline-meta">
                      <span className="timeline-period">{edu.period}</span>
                      <span className="timeline-grade">{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">💼</span>
              Experience
            </h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="experience-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-meta">
                      <span className={`experience-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="experience-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section className="resume-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="section-icon">🛠️</span>
              Featured Projects
            </h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-impact">{project.impact}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Full Width Achievements Section */}
      <motion.section className="resume-section achievements-full-width" variants={itemVariants}>
        <h2 className="section-title">
          <span className="section-icon">🏅</span>
          Achievements & Recognition
        </h2>
        
        {/* Academic Achievements */}
        <div className="achievements-category">
          <h3 className="category-title">
            <span className="category-icon">🎓</span>
            Academic Achievements
          </h3>
          <div className="achievements-list">
            {achievements.academic.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-item"
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="achievements-category">
          <h3 className="category-title">
            <span className="category-icon">📜</span>
            Certifications
          </h3>
          <div className="achievements-list">
            {achievements.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="achievement-item"
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="achievement-icon">{cert.icon}</span>
                <div className="achievement-content">
                  <h4 className="achievement-title">{cert.title}</h4>
                  <p className="achievement-description">
                    {cert.issuer}
                    {cert.score && ` • Score: ${cert.score}`}
                  </p>
                  <span className="achievement-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular Achievements */}
        <div className="achievements-category">
          <h3 className="category-title">
            <span className="category-icon">🌟</span>
            Extra-Curricular Activities
          </h3>
          <div className="achievements-list">
            {achievements.extraCurricular.map((activity, index) => (
              <motion.div 
                key={index}
                className="achievement-item"
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="achievement-icon">{activity.icon}</span>
                <div className="achievement-content">
                  <h4 className="achievement-title">{activity.title}</h4>
                  <p className="achievement-description">{activity.description}</p>
                  <span className="achievement-year">{activity.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
