import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.map((synonym, index) => (
        <div key={index}>{synonym}</div>
      ))}
    </div>
  );
}
