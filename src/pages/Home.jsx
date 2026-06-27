import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import heroImg from "../assets/hero.png";
import "../App.css";


function Home() {
  return (
    <>
       <section className="hero">
           <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
              <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hello, I'm
      </motion.h3>   
      
           <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Sumit Thakur
      </motion.h1>
      
      
              <motion.h2
        className="typing-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "JavaScript Developer",
            2000,
            "Web Designer",
            2000,
            "WordPress Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h2>
      
           <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I build modern, responsive and user-friendly websites using HTML,
        CSS, JavaScript and React.
      </motion.p>
      
             <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 25px rgba(56,189,248,0.7)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.button>
      
      
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="https://github.com/Sumiitsain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      
        <a
          href="https://www.linkedin.com/in/sumit-thakur-847a2b391/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      
        <a
          href="https://www.instagram.com/YOUR-INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </motion.div>
            </motion.div>
      
            <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <img src={heroImg} alt="Profile" />
      </motion.div>
            <div className="scroll-indicator">
        <div className="mouse">
          <span></span>
        </div>
      
        <p>Scroll Down</p>
      </div>
      
          </section>
    </>
  );
}

export default Home;