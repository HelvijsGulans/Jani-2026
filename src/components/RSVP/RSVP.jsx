import { useEffect, useState } from "react"
import "./RSVP.css"


export default function RSVP({text}) {

    const[name, setName] = useState("");
    const[guests, setGuests] = useState(0)
    const[dietaryNotes, setDietaryNotes] = useState("")
    const[stayUntilSunrise, setStayUntilSunrise] = useState(false)
    const[errors, setErrors] = useState({})
    const[submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const savedRsvp = localStorage.getItem("jani-2026-rsvp");

        if (savedRsvp) {
            const parsedRsvp = JSON.parse(savedRsvp);

            setName(parsedRsvp.name);
            setGuests(parsedRsvp.guests);
            setDietaryNotes(parsedRsvp.dietaryNotes);
            setStayUntilSunrise(parsedRsvp.stayUntilSunrise);
        }
    }, []);
    

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
