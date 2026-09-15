import "./EventInfo.css";

export default function EventInfo({text}) {
  return (
    <section id="contact">
      <h2>{text.title}</h2>

      <p>{text.meetingPoint}</p>

      <a
          href="https://maps.google.com/?q=Freedom+Monument+Riga"
          target="_blank"
          rel="noreferrer"
      >
          {text.mapLink}
      </a>

      <p>{text.contact}</p>
      <p>{text.email}</p>
    </section>
  );
};
