import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import QuoteDisplay from "./components/QuoteDisplay";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm solving problems through 
              <span className="highlight"> strategic development</span> and 
              <span className="highlight"> innovative solutions</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Creative solutions that elevate projects and create seamless user experiences. 
              I help bring ideas to life with technology and creativity.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/projects" className="cta-button primary">View My Work</Link>
              <Link to="/contact" className="cta-button secondary">Get In Touch</Link>
            </motion.div>
            <motion.div
              className="hero-stats"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">1.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.89</span>
                <span className="stat-label">CGPA</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image-container"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="image-wrapper">
              <img
                src="/IMG20240921224035.jpg"
                alt="Meenakshi"
                className="hero-image"
              />
              <div className="image-decoration"></div>
            </div>
            <QuoteDisplay />
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="featured-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Featured Works</h2>
            <p>Selected projects that showcase my skills and passion for development</p>
          </motion.div>
          
          <motion.div className="featured-grid" variants={containerVariants}>
            <motion.div className="featured-card main-card" variants={itemVariants}>
              <div className="card-image">
                <div className="project-placeholder main-project">
                  <span>AR</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Zoomagine</h3>
                <p>A powerful AR platform designed to help promote biodiversity awareness through immersive experiences</p>
                <div className="project-tags">
                  <span>Unity</span>
                  <span>C#</span>
                  <span>AR/VR</span>
                  <span>Patent</span>
                </div>
                <div className="card-footer">
                  <span className="project-type">AR Application</span>
                  <div className="award-badge">🏆 Patented Project</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="featured-card" variants={itemVariants}>
              <div className="card-image">
                <div className="project-placeholder">
                  <span>📱</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Cronicle</h3>
                <p>A dynamic cultural preservation platform that helps communities preserve and share their heritage</p>
                <div className="project-tags">
                  <span>Java</span>
                  <span>Firebase</span>
                  <span>Android</span>
                </div>
                <div className="card-footer">
                  <span className="project-type">Mobile App</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="view-all-container"
            variants={itemVariants}
          >
            <Link to="/projects" className="view-all-button">
              <span>View All Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="services-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Development solutions that elevate projects and create seamless user experiences</h2>
            <p>I help bring ideas to life with strategy and creativity</p>
          </motion.div>
          
          <motion.div className="services-grid" variants={containerVariants}>
            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <span>🎨</span>
              </div>
              <h3>Frontend Development</h3>
              <p>Creating responsive, interactive user interfaces with modern frameworks. From concept to deployment, I build engaging web experiences.</p>
              <div className="service-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>+more</span>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <span>📱</span>
              </div>
              <h3>Mobile Development</h3>
              <p>Building native and cross-platform mobile applications that deliver exceptional user experiences on all devices.</p>
              <div className="service-tags">
                <span>Java</span>
                <span>Android</span>
                <span>Firebase</span>
                <span>+more</span>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <span>🤖</span>
              </div>
              <h3>AI/ML Solutions</h3>
              <p>Implementing machine learning models and computer vision solutions to solve complex real-world problems.</p>
              <div className="service-tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>TensorFlow</span>
                <span>+more</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Timeline */}
      <motion.section 
        className="education-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Educational Journey</h2>
            <p>A path of continuous learning and academic excellence</p>
          </motion.div>
          
          <motion.div className="education-timeline" variants={containerVariants}>
            <motion.div className="education-item" variants={itemVariants}>
              <div className="education-year">2022-2026</div>
              <div className="education-content">
                <h3>B.Tech Computer Science Engineering</h3>
                <p>CGC Landran</p>
                <div className="education-grade">8.89 CGPA</div>
              </div>
            </motion.div>
            
            <motion.div className="education-item" variants={itemVariants}>
              <div className="education-year">2020-2022</div>
              <div className="education-content">
                <h3>12th CBSE</h3>
                <p>Shivalik School</p>
                <div className="education-grade">90.2%</div>
              </div>
            </motion.div>
            
            <motion.div className="education-item" variants={itemVariants}>
              <div className="education-year">2011-2020</div>
              <div className="education-content">
                <h3>10th ICSE</h3>
                <p>Mount Carmel School</p>
                <div className="education-grade">95.4%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        className="contact-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Ready to start a project?</h2>
            <p>Let's collaborate and bring your ideas to life with innovative solutions</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get In Touch</Link>
              <Link to="/resume" className="cta-button secondary">View Resume</Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
