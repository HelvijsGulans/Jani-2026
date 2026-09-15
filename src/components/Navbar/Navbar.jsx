import { useState } from "react";
import "./Navbar.css";

export default function Navbar({
  language,
  setLanguage,
  text,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="app__navbar">
      <a
        className="app__navbar_title"
        href="#top"
        onClick={closeMenu}
      >
        Jāņi '26
      </a>

      <div
        id="main-navigation"
        className={menuOpen ? "nav-menu open" : "nav-menu"}
      >
        <ul className="app__navbar_list">
          <li>
            <a href="#schedule" onClick={closeMenu}>
              {text.schedule}
            </a>
          </li>

          <li>
            <a href="#faq" onClick={closeMenu}>
              {text.faq}
            </a>
          </li>

          <li>
            <a href="#event-info" onClick={closeMenu}>
              {text.eventInfo}
            </a>
          </li>

          <li>
            <a href="#rsvp" onClick={closeMenu}>
              {text.rsvp}
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-actions">
        <div className="language-switcher">
          <button
            type="button"
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            type="button"
            aria-pressed={language === "lv"}
            onClick={() => setLanguage("lv")}
          >
            LV
          </button>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}