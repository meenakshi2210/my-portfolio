import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-glass')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/resume", label: "Resume", icon: "📄" },
    { path: "/projects", label: "Projects", icon: "💼" },
    { path: "/contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="name">Meenakshi</span>
          <span className="tagline">– An Enthusiastic Engineer</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>

        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
}
