import React from "react";

export default function Antonyms(props) {
  return (
    <div className="Antonyms">
      {props.antonyms.map((antonym, index) => (
        <div key={index}>{antonym}</div>
      ))}
    </div>
  );
}
