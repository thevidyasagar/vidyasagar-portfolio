import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Powered Career Mentor",
      description:
        "An intelligent career assistance platform designed to help users explore career paths, improve their skills, and make better career decisions.",
      technologies: ["Python", "AI", "Machine Learning", "React"],
      github: "https://github.com/thevidyasagar/CareerPilot-AI",
      demo: "#"
    },
    {
      number: "02",
      title: "Personal AI Assistant",
      description:
        "A personal AI assistant designed to interact with users, understand commands, and provide useful responses through intelligent automation.",
      technologies: ["Python", "AI", "Machine Learing", "NLP", "Automation"],
      github: "https://github.com/thevidyasagar/Sara-Assistant",
      demo: "#"
    },
    {
      number: "03",
      title: "E-Commerce Web Application",
      description:
        "A modern e-commerce application with product browsing, user interaction, and a scalable full-stack architecture.",
      technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/thevidyasagar/Crypto-Currency-Website",
      demo: "#"
    },
    {
      number: "04",
      title: "Book Store Web Application",
      description:
        "A full-stack book store application focused on clean UI, product management, backend APIs, and database integration.",
      technologies: ["React", "JavaScript", "CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/thevidyasagar/book-store-webapp",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

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

        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15
          }}
        >

          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.number}
              variants={cardVariants}
            >

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

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;