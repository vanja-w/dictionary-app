import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <ol>
        {props.synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ol>
    </div>
  );
}
