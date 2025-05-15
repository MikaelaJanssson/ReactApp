import { useState, useEffect } from "react";
import "../Styles/Sidebar.css";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <article className="sidebar">
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <div className={`sidebar-links ${menuOpen ? "open" : ""}`}>
        <a href="#uppgift2">Uppgift 2</a>
        <a href="#uppgift3">Uppgift 3</a>
        <button onClick={toggleDarkMode} className="darkmode-button">
          {darkMode ? "💚  Green Mode" : "❤ Pink Mode"}
        </button>
      </div>
    </article>
  );
}
