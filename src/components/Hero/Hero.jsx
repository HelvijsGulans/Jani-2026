import React from "react";
import "./Hero.css";
import heroImage from "./LaukuUpscaled.jpg"

export default function Hero(){
  return (
    <div className="app__hello" href="#hello">
      <div className="app__hello_main">
        <img
          className="app__hello_laukubilde"
          src={heroImage}
          alt="Latvian Countryside"
        />
        <div className="app__hello_container">
          <h3 className="app__hello_title">Sveiks!</h3>

          <div className="app__hello_card">
            <p>Dear friends and family!</p>
            <p>
              Celebrate the longest day of the year with food, music, bonfires and Latvian midsummer traditions.
            </p>
            <p>23 June 2026</p>
            <p>Latvia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
