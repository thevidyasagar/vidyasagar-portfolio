import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      number: "01",
      type: "Training / Internship",
      role: "Software Developer",
      company: "Your Company / Organization",
      location: "India",
      period: "2025",
      description:
        "Worked on practical software development projects involving frontend development, backend APIs, databases, and application development. Gained hands-on experience in building and testing real-world applications."
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Experience &
            <span> learning.</span>
          </h2>
        </div>

        <Reveal className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >

              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-main">

                <div className="experience-top">

                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>

                </div>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

              </div>

            </article>
          ))}

        </Reveal>

      </div>
    </section>
  );
}

export default Experience;