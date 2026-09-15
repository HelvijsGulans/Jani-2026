import { useState } from "react";
import "./Navbar.css";

export default function Navbar({
  language,
  setLanguage,
  text,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="app__navbar">
        <p className="app__navbar_title">Jāņi '26</p>

        <div className="navbar-actions">
            <div className="language-switcher">
            <button
                type="button"
                onClick={() => setLanguage("en")}
            >
                EN
            </button>

            <button
                type="button"
                onClick={() => setLanguage("lv")}
            >
                LV
            </button>
            </div>

            <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            >
            {menuOpen ? "✕" : "☰"}
            </button>
        </div>

        <div className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <ul className="app__navbar_list">
            <li>
                <a href="#schedule">{text.schedule}</a>
            </li>
            <li>
                <a href="#faq">{text.faq}</a>
            </li>
            <li>
                <a href="#event-info">{text.eventInfo}</a>
            </li>
            <li>
                <a href="#rsvp">{text.rsvp}</a>
            </li>
            </ul>
        </div>
    </nav>
  );
}