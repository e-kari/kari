const Page = () => {
  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero and About Me Section */}
        <section className="hero-about-container" id="home">
          <section className="hero">
            <h1>Hey there, I'm <span className="pinktext">Kari</span> !</h1>
            <div className="ascii-section">
              <pre className="ascii-bear">
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
        <p>Made with <span className="pinktext">♥</span> by Kari, 2025</p>
      </footer>
    </div>
  );
};

export default Page;