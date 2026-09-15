import { useState } from "react";
import "./RSVP.css";

function loadSavedRsvp() {
    const savedRsvp = localStorage.getItem("jani-2026-rsvp");

    if (!savedRsvp) {
        return null;
    }

    try {
        return JSON.parse(savedRsvp);
    } catch {
        return null;
    }
}

export default function RSVP({ text }) {
    const [savedRsvp] = useState(loadSavedRsvp);

    const [name, setName] = useState(savedRsvp?.name ?? "");
    const [guests, setGuests] = useState(savedRsvp?.guests ?? 0);
    const [dietaryNotes, setDietaryNotes] = useState(
        savedRsvp?.dietaryNotes ?? ""
    );
    const [stayUntilSunrise, setStayUntilSunrise] = useState(
        savedRsvp?.stayUntilSunrise ?? false
    );

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);    

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (name.trim() === "") {
            newErrors.name = text.errors.nameRequired;
        }

        if (guests < 0) {
            newErrors.guests = text.errors.guestsNegative;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const rsvp = {
        name,
        guests,
        dietaryNotes,
        stayUntilSunrise
        }

        localStorage.setItem(
            "jani-2026-rsvp",
            JSON.stringify(rsvp)
        )

        setSubmitted(true)
    };

    

  return (
    <section className="app__rsvp_section">
        <form id="rsvp" className="app__rsvp" onSubmit={handleSubmit}>
            <h2>{text.title}</h2>
            <div className="form-field">
                
                <label htmlFor="name">{text.name}</label>

                <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />

                {errors.name && (
                <p className="form-error">{errors.name}</p>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="guests">{text.guests}</label>

                <input
                id="guests"
                type="number"
                min="0"
                value={guests}
                onChange={(event) =>
                    setGuests(Number(event.target.value))
                }
                />

                {errors.guests && (
                <p className="form-error">{errors.guests}</p>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="dietaryNotes">
                {text.dietaryNotes}
                </label>

                <textarea
                id="dietaryNotes"
                value={dietaryNotes}
                onChange={(event) =>
                    setDietaryNotes(event.target.value)
                }
                />
            </div>

            <div className="form-field">
                <label htmlFor="stayUntilSunrise">
                {text.stayUntilSunrise}
                </label>

                <input
                id="stayUntilSunrise"
                type="checkbox"
                checked={stayUntilSunrise}
                onChange={(event) =>
                    setStayUntilSunrise(event.target.checked)
                }
                />
            </div>

            <button type="submit">{text.submit}</button>

            {submitted && <p>{text.success}</p>}
        </form>
    </section>
  )
}
