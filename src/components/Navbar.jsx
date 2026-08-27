import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          VS<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">

          <a
            href="https://github.com/thevidyasagar"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="Github"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vidyasagar-228109259/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a href="#contact" className="contact-btn">
            Contact Me
          </a>

          <button className="mobile-menu" aria-label="Open menu">
            <Menu size={22} />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;