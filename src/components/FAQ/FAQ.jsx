import { useState } from "react";
import "./FAQ.css";

export default function FAQ({ text }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="app__FAQ" id="faq">
      <h2 className="app__FAQ_title">{text.title}</h2>

      {text.items.map((item, i) => (
        <div
          key={item.question}
          className="item"
          onClick={() => toggle(i)}
        >
          <div className="question">
            <h3>{item.question}</h3>
            <span className="plus">
              {selected === i ? "-" : "+"}
            </span>
          </div>

          <div className={selected === i ? "answer show" : "answer"}>
            <div className="answer-inner">
              {item.answer}
            </div>
          </div>
        </div>
      ))}

      <h3 className="app__FAQ_extraQ">
        {text.extraQuestion}
      </h3>
    </section>
  );
}