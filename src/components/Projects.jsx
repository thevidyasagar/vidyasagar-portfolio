function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Powered Career Mentor",
      description:
        "An intelligent career assistance platform designed to help users explore career paths, improve their skills, and make better career decisions.",
      technologies: ["Python", "AI", "Machine Learning", "React"],
      github: "https://github.com/",
      demo: "#"
    },
    {
      number: "02",
      title: "Personal AI Assistant",
      description:
        "A personal AI assistant designed to interact with users, understand commands, and provide useful responses through intelligent automation.",
      technologies: ["Python", "AI", "NLP", "Automation"],
      github: "https://github.com/",
      demo: "#"
    },
    {
      number: "03",
      title: "E-Commerce Web Application",
      description:
        "A modern e-commerce application with product browsing, user interaction, and a scalable full-stack architecture.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      demo: "#"
    },
    {
      number: "04",
      title: "Book Store Web Application",
      description:
        "A full-stack book store application focused on clean UI, product management, backend APIs, and database integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      demo: "#"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a href={project.demo}>
                    Live Demo ↗
                  </a>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;