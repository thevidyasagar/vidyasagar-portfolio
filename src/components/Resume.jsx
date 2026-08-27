import Reveal from "./Reveal";

function Resume() {
  return (
    <section className="resume section" id="resume">
      <Reveal className="resume-container">

        <div className="resume-content">
          <p className="section-label">MY RESUME</p>

          <h2>
            A closer look at my
            <span> journey.</span>
          </h2>

          <p className="resume-description">
            Explore my education, skills, projects and professional
            experience in one place.
          </p>

          <a
            href="/resume.pdf"
            className="resume-btn"
            download
          >
            Download Resume
            <span>↗</span>
          </a>
        </div>

        <div className="resume-side">
          <div className="resume-line"></div>

          <p>
            Open to opportunities across AI engineering,
            software development, and full-stack development,
            with a focus on building intelligent and impactful solutions.
          </p>
        </div>

      </Reveal>
    </section>
  );
}

export default Resume;