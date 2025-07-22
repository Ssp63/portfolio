
function About() {
    return (
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm Shreyash Pawar, a passionate IT engineering student and self-motivated
          individual on an exciting journey into the world of web development.
          I thrive on learning new technologies and am dedicated to creating
          intuitive and engaging user experiences. I build intelligent systems that solve real-world problems, from educational feedback analyzers to de-addiction portals for public welfare. I love merging AI with intuitive web experiences using Python, Streamlit, Node.js, and Azure AI services.
        </p>
        <p>
          My current focus is on mastering front-end technologies, and I'm always
          eager to collaborate on interesting projects.
        </p>
        <div className="about-actions">
          <a
            href="/ShreyashPawar.pdf" // Make sure this matches your PDF filename in /public
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary" // Using a general btn class
          >
            View/Download Resume
          </a>
        </div>
        <h3>Skills:</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>Node.js</li>
          <li>Azure AI</li>
          <li>C++</li>
          <li>Github</li>
        </ul>
      </section>
    );
  }
  
  export default About;