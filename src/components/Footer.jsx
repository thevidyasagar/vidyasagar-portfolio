function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              VS<span>.</span>
            </a>

            <p className="footer-tagline">
              Building digital experiences with code,
              creativity and intelligent technology.
            </p>
          </div>

          <div className="footer-center">
            <span className="footer-label">
              LET'S CONNECT
            </span>

            <a
              href="mailto:vidyasagararya41@gmail.com"
              className="footer-email"
            >
              vidyasagararya41@gmail.com
            </a>
          </div>

          <div className="footer-social">

            <a
              href="https://github.com/thevidyasagar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
         <p>
          © {new Date().getFullYear()} Vidyasagar. All rights reserved.
         </p>
      </div>

    </footer>
  );
}

export default Footer;