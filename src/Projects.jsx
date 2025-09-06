import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Zoomagine",
    description: "A powerful AR platform designed to help promote biodiversity awareness through immersive experiences. This Unity-based application uses cutting-edge augmented reality technology to educate users about endangered species and their habitats.",
    tech: ["Unity", "C#", "AR/VR", "Android"],
    link: "https://github.com/NamanArora2004/ZooMagine/tree/Meenakshi",
    category: "AR/VR",
    status: "patented",
    featured: true,
    icon: "🦋",
    gradient: "featured",
    role: "Team Lead, worked on the AR/VR graphics and fundamental coding"
  },
  {
    id: 2,
    name: "Cronicle",
    description: "A dynamic cultural preservation platform that helps communities preserve and share their heritage. This Android application promotes local vendors and enables cultural tourism through innovative technology.",
    tech: ["Android Studio", "Java", "Firebase", "Google Maps"],
    link: "https://github.com/meenakshi2210/cronicleSIH",
    category: "Mobile",
    status: "patent-pending",
    featured: false,
    icon: "📱",
    gradient: "mobile",
    role: "Android developer, managed Backend, Authorization and firebase"
  },
  {
    id: 3,
    name: "Speed Recognizer",
    description: "Real-time vehicle speed detection system for traffic monitoring and safety applications. Uses advanced computer vision techniques to analyze video streams and calculate vehicle speeds accurately.",
    tech: ["Python", "OpenCV", "Computer Vision", "TensorFlow"],
    category: "AI/ML",
    status: "published",
    featured: false,
    icon: "🚗",
    gradient: "ai-ml",
    role: "Resource manager and coder"
  },
  {
    id: 4,
    name: "Electricity Bill Generation System",
    description: "Desktop application for automated electricity bill generation and management. Features comprehensive billing calculations, customer management, and report generation with an intuitive user interface.",
    tech: ["Java", "JDBC", "Swing", "MySQL"],
    link: "https://github.com/meenakshi2210/Electricity_Bill",
    category: "Desktop",
    status: "published",
    featured: false,
    icon: "⚡",
    gradient: "desktop",
    role: "Self"
  },
  {
    id: 5,
    name: "HowToAlgo",
    description: "Comprehensive learning platform for Data Structures & Algorithms, System Design, and Machine Learning. Features interactive coding challenges, tutorials, and contest preparation materials.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    link: "https://www.howtoalgo.com/",
    category: "Web",
    status: "published",
    featured: false,
    icon: "📚",
    gradient: "web",
    role: "Intern and Technical lead"
  },
  {
    id: 6,
    name: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and featuring smooth animations, interactive elements, and optimized performance.",
    tech: ["React", "CSS3", "Framer Motion", "JavaScript"],
    link: "https://github.com/meenakshi2210/my-portfolio",
    category: "Web",
    status: "published",
    featured: false,
    icon: "🌐",
    gradient: "web",
    role: "Self"
  },
  {
    id: 7,
    name: "ELearn Digital Classes",
    description: "Android application for digital learning designed for CBSE students from class 6 to class 12. Provides comprehensive syllabus details, textbooks, question/answers, practice papers, and interactive learning materials.",
    tech: ["Android Studio", "Java", "Firebase", "SQLite"],
    link: "https://github.com/meenakshi2210/ELearn_DigitalClasses",
    category: "Mobile",
    status: "published",
    featured: false,
    icon: "📱",
    gradient: "mobile",
    role: "Android Developer"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  const getStatusBadge = (status) => {
    switch (status) {
      case "patented":
        return "🏆 Patented";
      case "patent-pending":
        return "⏳ Patent Pending";
      case "published":
        return "✅ Published";
      default:
        return "";
    }
  };

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="projects-hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my journey through innovative solutions, cutting-edge technology, and creative problem-solving. Each project represents a unique challenge conquered through strategic development and technical expertise.
          </motion.p>
          <motion.div 
            className="projects-stats"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="project-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Patents</span>
            </div>
            <div className="project-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="projects-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`project-image ${project.gradient}`}>
                <div className="project-placeholder">
                  <span>{project.icon}</span>
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      {getStatusBadge(project.status)}
                    </span>
                  </div>
                </div>
                <div className="project-role">
                  <span className="role-label">Role:</span>
                  <span className="role-value">{project.role}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()} // prevents parent card clicks from hijacking
                      style={{ position: "relative", zIndex: 5, pointerEvents: "auto" }}
                    >
                      <span>View Code</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Load More Section */}
      <motion.section 
        className="load-more-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* <button className="load-more-btn">
          <span>Load More Projects</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </button> */}
      </motion.section>

      {/* Back to Portfolio */}
      <motion.section 
        className="load-more-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="load-more-btn">
          <span>Back to Portfolio</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
      </motion.section>
    </div>
  );
}
