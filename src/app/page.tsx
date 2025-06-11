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
            <h1>Hey there, I&apos;m <span className="pinktext">Kari</span> !</h1>
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
            <h3>I&apos;m a driven software engineer with a strong foundation in Java and web development. I&apos;ve built real-world projects, including a custom Discord bot, and I enjoy taking on new challenges that push me to grow. In university, I consistently rose to meet complex problems, learning new tools and technologies to deliver effective solutions. I bring a growth mindset, a passion for clean and efficient code, and a commitment to continuous improvement in everything I build.</h3>
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
                <h3><a href="https://github.com/e-kari/kari">Personal Portfolio Website</a></h3>
              </div>
              <div className="project-content">
                <img src="/images/portfolio.png" alt="Kari's Portfolio Website Screenshot" />

                <p>
                  <li>A responsive, custom-coded portfolio website built using <strong>Next.js</strong> and <strong>TypeScript</strong></li><br></br>
                  <li>Features a playful bear animation, a soft and cohesive <strong>color palette</strong>, and a fully personalized layout. I designed and implemented each section, including <strong>project cards</strong>, an <strong>about me section</strong>, and a responsive navigation bar, applying best practices in <strong>frontend development</strong> and <strong>UI design</strong>.</li><br></br>
                  <li>Through this project, I gained hands-on experience with <strong>React-based frameworks</strong>, component architecture, styling systems, and preparing an app for deployment.</li><br></br>
                  <strong>Tech:</strong> Next.js · TypeScript · React · Tailwind CSS · Git · Vercel
                </p>
              </div>
            </div>

            <div className="project">
              <div className="project-header">
                <h3><a href="https://github.com/e-kari/gachhan">Gacchan: Discord Gacha Bot</a></h3>
              </div>
              <div className="project-content">
                <img src="/images/gacchan.png" alt="Gacchan Discord Bot Screenshot" />
                <p>
                  <li>Developed a full-featured Discord bot using <strong>Python</strong>, <strong>discord.py</strong>, and <strong>SQLite</strong> to deliver a gacha-style experience for a Final Fantasy XIV roleplay community.</li><br></br>
                  <li>Supports <strong>slash commands</strong>, <strong>role-based access control</strong>, and persistent user data management through a custom <strong>SQLAlchemy backend</strong>.</li><br></br>
                  <li>Features include randomized card pulls, inventory tracking, and admin-level controls for managing in-game currency and collections.</li><br></br>
                  This project strengthened my skills in <strong>backend development</strong>, <strong>API design</strong>, and <strong>user-focused feature implementation</strong>.
                </p>
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
              I&apos;m a first-generation immigrant and the first in my family to graduate from university, a journey that taught me the value of resilience, discipline, and self-belief.
            </p>
            <p>
              I discovered programming through curiosity, but I stayed because of how empowering it feels to bring ideas to life with code. Over time, I&apos;ve built projects that challenged me, taught me new languages and frameworks, and reminded me that I&apos;m capable of more than I imagined. Whether it&apos;s building something from scratch or refining my skills through study, I pursue excellence with intent. 
            </p>
            <p>
              Outside of tech, I&apos;m a creative at heart. I roller skate, play guitar and ukulele, dabble in poetry, cook, and find joy in games that tell good stories. That same creativity fuels my work as a developer. I&apos;m always learning, always growing, and always excited for what&apos;s next.
            </p>
            </div>
            <div className="about-experience">
            <ul>
              <li>
                <div className="experience-title">Computer Science, B.S.</div>
                <div className="experience-company">Texas A&M University-San Antonio</div>
                <div className="experience-date">Graduation: 2025</div>
                <p>Focusing on software engineering principles, data structures, algorithms, and full-stack application development.</p>
                <p><b>Mobile Computing Certificate</b>: Focus on Web Application Development, Android Development (Kotlin / Android Studio) & iOS Development (Swift / XCode). </p>
                <p><b>Cybersecurity Certificate</b>: Focus on Programming Fundamentals, Intro to Cybersecurity, Computer Networks & Penetration Testing.</p>
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
                    <li><strong>Back-end:</strong> Java, Python, PHP, RESTful APIs, Kotlin, Swift</li>
                    <li><strong>Front-end:</strong> HTML, CSS, JavaScript, Bootstrap, Next.js, TypeScript</li>
                    <li><strong>Databases:</strong> SQL (MongoDB, PostgreSQL), Neo4j</li>
                    <li><strong>Methodologies:</strong>Agile</li>
                    <li><strong>Tools & Testing:</strong> Git, JUnit, Postman, Static Analysis (Pylint, Checkstyle, SpotBugs), Android, XCode, Railway Deployment</li>
                    <li><strong>Additional Strengths:</strong> Time management, Collaboration, Problem Solving, Critical Thinking, Clear Communication </li>
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