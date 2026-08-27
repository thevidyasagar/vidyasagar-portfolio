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
                I build intelligent software solutions across AI, Machine Learning,
                NLP, and Full-Stack Development, with a strong foundation in Python.
                I'm open to meaningful opportunities, collaborations, and projects
                that turn ideas into practical technology.
            </p>

            <a
              href="mailto:vidyasagararya41@gmail.com"
              className="contact-email"
            >
              vidyasagararya41@gmail.com ↗
            </a>

          </div>


          <div className="contact-card">

            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:vidyasagararya41@gmail.com">
                vidyasagararya41@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>GitHub</span>
              <a
                href="https://github.com/thevidyasagar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile ↗
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/vidyasagar-228109259/"
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