import Reveal from "./Reveal";

function Education() {
  const education = [
    {
      number: "01",
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Bansal Institute of Engineering and Technology Lucknow",
      location: "Uttar Pradesh, India",
      period: "2022 — 2026",
      description:
        "Building a strong foundation in AI, software development, programming, web technologies, databases, and core computer science concepts.."
    }
  ];

  return (
    <section className="education section" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            Academic
            <span> foundation.</span>
          </h2>
        </div>

        <Reveal className="education-list">

          {education.map((item) => (
            <article className="education-card" key={item.number}>

              <div className="education-number">
                {item.number}
              </div>

              <div className="education-content">

                <div className="education-top">

                  <div>
                    <h3>{item.degree}</h3>
                    <h4>{item.field}</h4>
                  </div>

                  <span className="education-period">
                    {item.period}
                  </span>

                </div>

                <p className="education-institution">
                  {item.institution} · {item.location}
                </p>

                <p className="education-description">
                  {item.description}
                </p>

              </div>

            </article>
          ))}

        </Reveal>

      </div>
    </section>
  );
}

export default Education;