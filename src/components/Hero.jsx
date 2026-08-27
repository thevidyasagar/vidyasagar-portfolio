import { ArrowDown, Download } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Vidyasagar
            <span>Developer</span>
          </h1>

          <h2>Software Developer | AI & Full Stack</h2>

          <p className="hero-description">
            I build modern web applications and intelligent software
            solutions with a focus on clean design, scalable development,
            and real-world problem solving.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
              <ArrowDown size={18} />
            </a>

            <a href="/resume.pdf" className="secondary-btn" download>
              <Download size={18} />
              Download Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/theevidyasagar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/vidyasagar-228109259/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-ring"></div>

          <div className="hero-image-placeholder">
            <img src={profileImage} alt="Vidyasagar" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;