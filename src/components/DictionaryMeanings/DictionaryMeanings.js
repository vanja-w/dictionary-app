import React from "react";

export default function DictionaryMeanings(props) {
  if (props.meaning) {
    return (
      <div className="DictionaryMeanings">
        {/*display part of speech of searched word*/}
        <div className="col partOfSpeech">{props.meaning.partOfSpeech}</div>

        {props.meaning.definitions.map((definition, index) => (
          <div key={index}>
            {/*display definition of searched word*/}
            <div className="row">
              <div className="col">definition</div>
              <div className="col">{definition.definition}</div>
            </div>
            {/*display example of searched word*/}
            <div className="row">
              <div className="col">example</div>
              <div className="col">{definition.example}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
