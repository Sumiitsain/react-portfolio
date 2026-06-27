import "./Project.css";
import gleamart from "../assets/gleamartcorporation.com_.png";
import atdrate from "../assets/www.atdratemedia.com.jpg.png";
import portfolio from "../assets/portfolio.jpg.png";
function Projects() {
  return (
    <section className="projects">

      <div className="projects-heading">
        <h4>My Work</h4>
        <h1>Latest Projects</h1>
        <p>
          Here are some of my recent web development projects.
        </p>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-image">
            <img src={gleamart} alt="Gleam Art Corporation" />
          </div>

          <div className="project-content">

            <h2>Gleam Art Corporation</h2>

            <p>
              Responsive E-Commerce website developed using WordPress with a modern shopping experience.
            </p>

            <div className="tech">
              <span>WordPress</span>
              <span>E-Commerce</span>
            </div>

            <div className="buttons">
              <a href="https://gleamartcorporation.com/">Live Website</a>
            </div>

          </div>

        </div>

        {/* Project 2 */}
        <div className="project-card">

          <div className="project-image">
            <img src={atdrate} alt="atdratemedia" />
          </div>

          <div className="project-content">

            <h2>ATDRATE Media</h2>

            <p>
              Responsive Digital Marketing website built using HTML, CSS and JavaScript.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="https://www.atdratemedia.com/">Live Website</a>
            </div>

          </div>

        </div>

        {/* Project 3 */}
        <div className="project-card">

          <div className="project-image">
            <img src={portfolio} alt="personal portfolio" />
          </div>

          <div className="project-content">

            <h2>Personal Portfolio</h2>

            <p>
              Modern portfolio website built using React, CSS and Framer Motion.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>Framer Motion</span>
            </div>

            <div className="buttons">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;