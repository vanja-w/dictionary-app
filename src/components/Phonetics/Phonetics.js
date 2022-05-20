import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <p> {props.phonetic.text}</p>
    </div>
  );
}
