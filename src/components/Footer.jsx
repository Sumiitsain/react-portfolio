import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Sumit.</h2>
          <p>
            Frontend Developer passionate about creating
            modern, responsive and user-friendly websites.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 thakursumit3253@gmail.com</p>
          <p>📞 +91 7988640544</p>
          <p>📍 Haryana, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sumit Thakur | Made with ❤️ using React
        </p>
      </div>

    </footer>
  );
}

export default Footer;