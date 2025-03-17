"use client";
import { useEffect, useState } from "react";

const Page = () => {
  // State for hamburger menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // State for bear rotation angle
  const [bearRotation, setBearRotation] = useState(0);
  // State for rotation direction (1 = right, -1 = left)
  const [rotationDirection, setRotationDirection] = useState(1);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect for bear tilting animation
  useEffect(() => {
    // The animation speed - higher number = slower movement
    const animationSpeed = 150; // milliseconds between updates
    
    // Maximum rotation angle in degrees (positive and negative)
    const maxRotation = 5; // degrees - subtle tilting
    
    // Set up the interval for the animation
    const interval = setInterval(() => {
      setBearRotation((prevRotation) => {
        // Calculate new rotation angle
        const newRotation = prevRotation + (0.5 * rotationDirection);
        
        // If we've reached the maximum in either direction, change direction
        if (newRotation >= maxRotation) {
          setRotationDirection(-1);
          return maxRotation; // Explicitly cap at maximum
        } else if (newRotation <= -maxRotation) {
          setRotationDirection(1);
          return -maxRotation; // Explicitly cap at minimum
        }
        
        // Otherwise return the new calculated rotation
        return newRotation;
      });
    }, animationSpeed);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [rotationDirection]); // Re-run effect when direction changes

  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <a href="#home">Kari</a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="desktop-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${menuOpen ? 'line1-active' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'line2-active' : ''}`}></div>
          <div className={`hamburger-line ${menuOpen ? 'line3-active' : ''}`}></div>
        </div>
        
        {/* Mobile Navigation */}
        <ul className={`mobile-menu ${menuOpen ? 'mobile-menu-active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero and About Me Section */}
        <section className="hero-about-container" id="home">
          <section className="hero">
            <h1>Hey there, I'm <span className="pinktext">Kari</span> !</h1>
            <div className="ascii-section">
              <pre 
                className="ascii-bear"
                style={{ 
                  display: 'inline-block',
                  transform: `rotate(${bearRotation}deg)`,
                  transformOrigin: 'center bottom',
                  transition: 'transform 0.2s ease-in-out'
                }}
              >
                {`
⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀
                `} 
              </pre>
            </div>
          </section>

          {/* About Me Section */}
          <section className="about-section" id="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="contact">
              <a href="mailto:your-email@example.com">Email</a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </section>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="project-container">
            <div className="project">
              <div className="project-header">
                <h3>Project 1</h3>
              </div>
              <div className="project-content">
                <img src="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841" alt="Project 1" />
                <p>Description of Project 1 </p>
              </div>
            </div>
            <div className="project">
              <div className="project-header">
                <h3>Project 2</h3>
              </div>
              <div className="project-content">
                <img src="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841" alt="Project 2" />
                <p>Description of Project 2 </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>Made with <span className="pinktext">♥</span> by Kari, 2025. All rights reserved. </p>
      </footer>
    </div>
  );
};

export default Page;