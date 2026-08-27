import Reveal from "./Reveal";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Certification Title",
      issuer: "Issuing Organization",
      year: "2025",
      description:
        "A short description of the certification, skills covered, or what you learned."
    },
    {
      number: "02",
      title: "Certification Title",
      issuer: "Issuing Organization",
      year: "2025",
      description:
        "A short description of the certification, skills covered, or what you learned."
    }
  ];

  const achievements = [
    {
      number: "01",
      title: "Achievement Title",
      description:
        "Briefly describe an important achievement, competition, project milestone, or recognition."
    },
    {
      number: "02",
      title: "Achievement Title",
      description:
        "Briefly describe another achievement or recognition."
    }
  ];

  return (
    <section className="certifications section" id="certifications">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">CERTIFICATIONS & ACHIEVEMENTS</p>

          <h2>
            Proof of
            <span> progress.</span>
          </h2>
        </div>

        <Reveal className="credentials-grid">

          <div className="credential-column">
            <h3 className="credential-heading">
              Certifications
            </h3>

            {certifications.map((item) => (
              <article className="credential-card" key={item.number}>

                <span className="credential-number">
                  {item.number}
                </span>

                <div>
                  <h4>{item.title}</h4>

                  <p className="credential-meta">
                    {item.issuer} · {item.year}
                  </p>

                  <p className="credential-description">
                    {item.description}
                  </p>
                </div>

              </article>
            ))}
          </div>


          <div className="credential-column">
            <h3 className="credential-heading">
              Achievements
            </h3>

            {achievements.map((item) => (
              <article className="credential-card" key={item.number}>

                <span className="credential-number">
                  {item.number}
                </span>

                <div>
                  <h4>{item.title}</h4>

                  <p className="credential-description">
                    {item.description}
                  </p>
                </div>

              </article>
            ))}
          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default Certifications;