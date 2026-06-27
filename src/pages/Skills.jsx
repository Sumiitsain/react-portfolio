import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills">

      <div className="skills-heading">
        <h4>My Skills</h4>
        <h1>Technical Skills</h1>
        <p>
          Technologies and tools I use to build modern, responsive and
          user-friendly web applications.
        </p>
      </div>

      <div className="skills-container">

       <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
          <FaHtml5 className="skill-icon html-icon" />
          <h3>HTML</h3>
          <div className="progress">
            <div className="progress-bar html"></div>
          </div>
          <span>95%</span>
        </motion.div>

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
           <FaCss3Alt className="skill-icon css-icon" />
          <h3>CSS</h3>
          <div className="progress">
            <div className="progress-bar css"></div>
          </div>
          <span>90%</span>
        </motion.div>

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
           <FaJsSquare className="skill-icon js-icon" />
          <h3>JavaScript</h3>
          <div className="progress">
            <div className="progress-bar js"></div>
          </div>
          <span>85%</span>
        </motion.div>

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
           <FaReact className="skill-icon react-icon" />
          <h3>React</h3>
          <div className="progress">
            <div className="progress-bar react"></div>
          </div>
          <span>80%</span>
        </motion.div>

       <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
           <FaBootstrap className="skill-icon bootstrap-icon" />
          <h3>Bootstrap</h3>
          <div className="progress">
            <div className="progress-bar bootstrap"></div>
          </div>
          <span>90%</span>
        </motion.div>

        <div className="skill-card">
          <FaWordpress className="skill-icon wordpress-icon" />
          <h3>WordPress</h3>
          <div className="progress">
            <div className="progress-bar wordpress"></div>
          </div>
          <span>85%</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;