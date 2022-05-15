import React from "react";
import DictionaryMeanings from "../DictionaryMeanings/DictionaryMeanings";
import Synonyms from "../Synonyms/Synonyms";
import Antonyms from "../Antonyms/Antonyms";

export default function DictionaryResults(props) {
  if (props.apiResults) {
    console.log(props.apiResults);

    return (
      <div className="DictionaryResults">
        {/*display the searched word*/}
        <div className="searchedWord">{props.apiResults.word}</div>
        <div className="row">
          <div className="col-6 left-side">
            <div className="row">
              {/*mapping over meanings*/}
              {props.apiResults.meanings.map((meaning, index) => (
                <div key={index} className="col">
                  <DictionaryMeanings meaning={meaning} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6 right-side">
            <div className="row">
              <div className="col">
                {/*mapping over meanings*/}
                {props.apiResults.meanings.map((meaning, index) =>
                  meaning.synonyms.length > 0 ? (
                    <div key={index}>
                      <Synonyms synonyms={meaning.synonyms} />
                    </div>
                  ) : null
                )}
              </div>

              <div className="col">
                {/*mapping over meanings*/}
                {props.apiResults.meanings.map((meaning, index) =>
                  meaning.antonyms.length > 0 ? (
                    <div key={index}>
                      <Antonyms antonyms={meaning.antonyms} />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
