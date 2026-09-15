import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Schedule from "./components/Schedule/Schedule"
import FAQ from "./components/FAQ/FAQ"
import EventInfo from "./components/Contacts/EventInfo"
import translations from "./data/translations";
import RSVP from "./components/RSVP/RSVP";

function App() {

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("jani-2026-language")

    return savedLanguage === "lv" ? "lv" : "en"
  });

  useEffect(() => {
    localStorage.setItem("jani-2026-language", language)

    document.documentElement.lang = language;
  }, [language]);

  const text = translations[language];

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        text={text.nav}
        />
      <main>
        <h1>Jāņi 2026</h1>
        <Hero text={text.hero}/>
        <Schedule text={text.schedule} />
        <FAQ text={text.faq}/>
        <EventInfo text={text.eventInfo}/>
        <RSVP text={text.rsvp}/>
      </main>
    </>
  );
}

export default App;