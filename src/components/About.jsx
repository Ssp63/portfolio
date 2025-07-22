
function About() {
    return (
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm John Doe, a passionate and self-motivated
          individual on an exciting journey into the world of web development.
          I thrive on learning new technologies and am dedicated to creating
          intuitive and engaging user experiences.
        </p>
        <p>
          My current focus is on mastering front-end technologies, and I'm always
          eager to collaborate on interesting projects.
        </p>
        <div className="about-actions">
          <a
            href="/your-name-resume.pdf" // Make sure this matches your PDF filename in /public
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary" // Using a general btn class
          >
            View/Download Resume
          </a>
        </div>
        <h3>Skills:</h3>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
        </ul>
      </section>
    );
  }
  
  export default About;