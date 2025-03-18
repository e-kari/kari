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
    // The animation speed: higher number = slower movement
    const animationSpeed = 35;
    
    // Maximum rotation angle in degrees (positive and negative)
    const maxRotation = 5; // degrees: subtle tilting
    
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

    // Effect to close menu on resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setMenuOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      // Initial check on mount
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

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
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero and About Me Section */}
        <section className="hero-intro-container" id="home">
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
          <section className="intro-section" id="intro">
            <h3>A problem solver at heart, I approach every challenge with patience, a level-headed mindset, and a deep curiosity to keep learning and improving. Whether it's optimizing code, designing robust architectures, or exploring new ways to solve technical puzzles, I thrive on continuous growth and innovation.</h3>
            <div className="contact">
              <a href="mailto:enya.kpg@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/enya-palomino/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/e-kari" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="kari-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
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

        {/* About Me Section */}
        <section className="about-me" id="about">
          <h2><span className="pinktext">About</span></h2>
          <div className="about-container">
            <div className="about-bio">
            <p>
              Hello! I'm Kari, a Computer Science student at Texas A&M-San Antonio with a passion for building robust software solutions. I thrive on solving complex problems through clean, efficient code and am eager to grow as a software engineer.
            </p>
            <p>
              My technical journey has equipped me with a strong foundation in back-end development using Java and Python, alongside front-end skills in HTML, CSS, JavaScript, and Next.js. I also specialize in database management, working with relational databases (SQL) and graph databases like Neo4j.
            </p>
            <p>
              Beyond coding, I love playing the ukulele, roller skating through parks, exploring nature trails, and experimenting with new baking recipes. This blend of analytical thinking and creativity allows me to bring both technical precision and innovative problem-solving to every project I take on.
            </p>
            </div>
            <div className="about-experience">
            <ul>
              <li>
                <div className="experience-title">Computer Science, B.S.</div>
                <div className="experience-company">Texas A&M University-San Antonio</div>
                <div className="experience-date">Expected Graduation: 2025</div>
                <p>Focusing on software engineering principles, data structures, algorithms, and full-stack application development.</p>
              </li>
              <li>
                <div className="experience-title">Teaching Assistant</div>
                <div className="experience-company">Austin Coding Academy</div>
                <div className="experience-date">2017-2018</div>
                <p>Developed curriculum materials and provided one-on-one tutoring to students. Helped bridge complex technical concepts for learners with diverse backgrounds.</p>
              </li>
              <li>
                <div className="experience-title">Volunteer</div>
                <div className="experience-company">Youth Code Jam</div>
                <div className="experience-date">2023-2024</div>
                <p>Facilitated workshops to make coding fun and accessible for K-12 learners. Helped create an inclusive and diverse future tech workforce through hands-on activities.</p>
              </li>
              <li>
                <div className="experience-title">Technical Skills</div>
                <div className="experience-company">Languages & Technologies</div>
                <div className="skills-list">
                  <ul>
                    <li><strong>Back-end:</strong> Java, Python, PHP, RESTful APIs</li>
                    <li><strong>Front-end:</strong> HTML, CSS, JavaScript, Next.js</li>
                    <li><strong>Databases:</strong> SQL, Neo4j</li>
                    <li><strong>Tools & Testing:</strong> Git, JUnit, Postman, Static Analysis (Pylint, Checkstyle, SpotBugs)</li>
                    <li><strong>Additional Strengths:</strong> Communication, Teaching, Customer Service</li>
                  </ul>
                </div>
              </li>
            </ul>
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