function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>Turning ideas into <span>real solutions.</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-content">

            <p className="about-lead">
              I'm Vidyasagar, a Software Developer focused on building
              modern web applications and intelligent software solutions.
            </p>

            <p>
              I have completed my B.Tech in Information Technology and
              enjoy working across frontend, backend, databases, and
              AI-powered applications.
            </p>

            <p>
              I like taking a problem from an idea to a working product,
              whether that means designing a clean user interface,
              developing APIs, working with databases, or integrating
              intelligent features into an application.
            </p>

            <p>
              Currently, I'm focused on strengthening my software
              development skills, building production-quality projects,
              and growing as a developer who can work across both
              software engineering and AI.
            </p>

          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <span className="highlight-number">01</span>
              <div>
                <h3>Software Development</h3>
                <p>
                  Building clean, scalable and maintainable applications.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">02</span>
              <div>
                <h3>AI & Intelligent Systems</h3>
                <p>
                  Creating practical AI-powered features and applications.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">03</span>
              <div>
                <h3>Problem Solving</h3>
                <p>
                  Using engineering and DSA fundamentals to solve problems.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;