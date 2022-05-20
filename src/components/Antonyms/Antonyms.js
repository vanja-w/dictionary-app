import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  return (
    <div className="Antonyms">
      <ol>
        {props.antonyms.map((antonym, index) => (
          <li key={index}>{antonym}</li>
        ))}
      </ol>
    </div>
  );
}
