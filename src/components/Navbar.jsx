import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Sumit.</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
  <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
  <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
  <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
  <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
</ul>

      <Link to="/contact" className="hire-btn">
  Hire Me
</Link>
<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
    </nav>
  );
}

export default Navbar;