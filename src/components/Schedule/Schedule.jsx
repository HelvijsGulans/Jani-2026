import "./Schedule.css";

export default function Schedule({text}) {
  return (
    <section className="app__schedule" id="schedule">
      <h2 className="app__schedule_title">{text.title}</h2>

      <ul className="app__schedule_list">
        {text.items.map((item) => (
          <li key={item.time}>
            <time>{item.time}</time>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

