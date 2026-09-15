import "./Hero.css";
import heroImage from "./LaukuUpscaled.webp"

export default function Hero({text}){
  return (
    <div className="app__hello" href="#hello">
      <div className="app__hello_main">
        <img
          className="app__hello_laukubilde"
          src={heroImage}
          alt="Latvian Countryside"
        />
        <div className="app__hello_container">
          <h1 className="app__hello_title">{text.title}</h1>
          <div className="app__hello_card">
            <p>{text.greeting}</p>
            <p>
              {text.description}
            </p>
            <p>{text.date}</p>
            <p>{text.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
