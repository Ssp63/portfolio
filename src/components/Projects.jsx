
// You can create an array of project data
const projectData = [
    {
      id: 1,
      title: 'Nasha Mukti Portal (Sangli ZP)',
      description: 'A multilingual (Marathi-English) platform offering level-based recovery support for drug addiction. Designed for both the public and government handover.',
      link: 'https://www.zpsanglijataayu.in/', 
    },
    {
      id: 2,
      title: 'Automated Info retrieval System(RAG AI)',
      description: ' A application that uses RAG AI to retrieve information from a given text/pdf.',
      link: 'https://github.com/Ssp63/DocumentQA',
    },
  ];
  
  function Projects() {
    return (
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectData.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;