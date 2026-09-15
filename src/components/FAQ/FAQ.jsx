import { useState } from "react";
import React from "react";
import "./FAQ.css";

import faq from "../../data/faq"

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const data = faq

  return (
    <div className="app__FAQ" id="faq">
      <text className="app__FAQ_title">Biežāk uzdotie jautājumi</text>
      {data.map((item, i) => (
        <div key={item.question} className="item" onClick={() => toggle(i)}>
          <div className="question">
            <h3>{item.question}</h3>
            <span className="plus">{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "answer show" : "answer"}>
            {item.answer}
          </div>
        </div>
      ))}
      <h3 className="app__FAQ_extraQ">
        Ir kāds jautājums? Sūti šurp, es atbildēšu!
      </h3>

    </div>
  );
};
