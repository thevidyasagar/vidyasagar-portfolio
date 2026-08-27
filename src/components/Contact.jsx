import Reveal from "./Reveal";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">

        <Reveal className="contact-wrapper">

          <div className="contact-content">

            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p className="contact-description">
              I'm open to software development opportunities,
              collaborations, interesting projects, and conversations
              around technology.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="contact-email"
            >
              your-email@example.com ↗
            </a>

          </div>


          <div className="contact-card">

            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:your-email@example.com">
                your-email@example.com
              </a>
            </div>

            <div className="contact-item">
              <span>GitHub</span>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                github.com/thevidyasagar ↗
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default Contact;