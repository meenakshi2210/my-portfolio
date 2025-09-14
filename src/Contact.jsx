import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatusMessage("Message sent successfully! I'll reply soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="contact-hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Create Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your ideas to life? I'm here to help you turn your vision into reality through innovative solutions and strategic development.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <motion.section 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="contact-wrapper">
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-info-header">
              <div className="profile-section">
                <div className="profile-image-wrapper">
                  <img
                    src="/IMG20240921224035.jpg"
                    alt="Meenakshi"
                    className="profile-image"
                  />
                  <div className="profile-decoration"></div>
                </div>
                <div className="profile-text">
                  <h2>Meenakshi Mehra</h2>
                  <p>Java Developer & Problem Solver</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>meenakshi20922@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+91 7889107694</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Nangal, Punjab, India</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/meenakshi-mehra-6b366b204/" target="_blank" rel="noreferrer" className="social-link linkedin">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noreferrer" className="social-link instagram">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="https://youtube.com/@vision_ahead?si=X66GwUxxxYFw1CU3" target="_blank" rel="noreferrer" className="social-link youtube">
                  <FaYoutube />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-section" variants={itemVariants}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Got a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="form-textarea"
                />
              </div>

              <motion.button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane className="btn-icon" />
              </motion.button>
            </form>

            {statusMessage && (
              <motion.div 
                className={`status-message ${statusMessage.includes('success') ? 'success' : statusMessage.includes('error') || statusMessage.includes('Failed') ? 'error' : 'info'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {statusMessage}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
