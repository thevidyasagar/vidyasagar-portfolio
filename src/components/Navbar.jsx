import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
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

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;