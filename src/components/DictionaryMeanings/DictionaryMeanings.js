import React from "react";

export default function DictionaryMeanings(props) {
  return (
    <div className="DictionaryMeanings">
      {/*display part of speech of searched word*/}
      <h3 className="mb-4 fw-bold">{props.meaning.partOfSpeech}</h3>

      {/*mapping over definitions in order to display definition and example*/}
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          {/*display definition of searched word*/}
          {!definition.definition ? null : (
            <div className="row">
              <div className="col-3 definition fst-italic">definition</div>
              <div className="col-9">{definition.definition}</div>
            </div>
          )}

          {/*display example of searched word*/}
          {!definition.example ? null : (
            <div className="row mb-4 mt-2">
              <div className="col-3 example fst-italic">example</div>
              <div className="col-9 fst-italic text-secondary">
                "{definition.example}"
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
