function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Artificial Intelligence", "Machine Learning", "Generative AI"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Tools I use to build
            <span> great things.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={group.title}>

              <div className="skill-card-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;