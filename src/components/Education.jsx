import Reveal from "./Reveal";

function Education() {
  const education = [
    {
      number: "01",
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Your College / University",
      location: "India",
      period: "2021 — 2025",
      description:
        "Focused on software development, programming, databases, web technologies, and computer science fundamentals."
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