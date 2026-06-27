import "./About.css";
import profile from "../assets/profile.jpg.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <motion.div
  className="about-left"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img src={profile} alt="Sumit Thakur" />
</motion.div>
        <motion.div
  className="about-right"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
          <h4>About Me</h4>
          <h2>Frontend Developer</h2>

          <p>
            I'm Sumit Thakur, a passionate Frontend Developer who enjoys
            building modern, responsive and user-friendly websites using
            HTML, CSS, JavaScript, React and WordPress.
          </p>

          <button className="about-btn">
            Download CV
          </button>
          <div className="about-info">
  <div className="info-box">
    <h3>Experience</h3>
    <p>Fresher</p>
  </div>

  <div className="info-box">
    <h3>Education</h3>
    <p>BCA Graduate</p>
  </div>

  <div className="info-box">
    <h3>Location</h3>
    <p>Haryana, India</p>
  </div>
</div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;