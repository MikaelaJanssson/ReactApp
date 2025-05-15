import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <span className="container-btn"></span>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
