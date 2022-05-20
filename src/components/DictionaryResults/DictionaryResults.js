import React from "react";
import DictionaryMeanings from "../DictionaryMeanings/DictionaryMeanings";
import Synonyms from "../Synonyms/Synonyms";
import Antonyms from "../Antonyms/Antonyms";
import Phonetics from "../Phonetics/Phonetics";
import "./DictionaryResults.css";

export default function DictionaryResults(props) {
  if (props.apiResults) {
    console.log(props.apiResults);

    return (
      <div className="DictionaryResults">
        {/*display the searched word*/}
        <div className="searchedWord">{props.apiResults.word}</div>

        <div className="row phonetics">
          {props.apiResults.phonetics.map((phonetic, index) =>
            phonetic.audio ? (
              <div key={index} className="col">
                <Phonetics phonetic={phonetic} />
              </div>
            ) : null
          )}
        </div>

        <div className="row meaning-results mt-5">
          <div className="col-8 left-side">
            <div className="row meanings flex-column">
              {/*mapping over meanings*/}
              {props.apiResults.meanings.map((meaning, index) => (
                <div key={index} className="col bg-white mb-3 rounded p-4">
                  <DictionaryMeanings meaning={meaning} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 right-side">
            <div className="row syn-antonym">
              {/*mapping over meanings*/}
              {props.apiResults.meanings.map((meaning, index) =>
                meaning.synonyms.length > 0 ? (
                  <div key={index} className="col synonyms mb-3 rounded p-4">
                    <div className="synonyms-title">
                      <h5 className="text-center">Synonyms</h5>
                      <span>({meaning.partOfSpeech})</span>
                    </div>

                    <Synonyms synonyms={meaning.synonyms} />
                  </div>
                ) : null
              )}

              {/*mapping over meanings*/}
              {props.apiResults.meanings.map((meaning, index) =>
                meaning.antonyms.length > 0 ? (
                  <div key={index} className="col antonyms mb-3 rounded p-4">
                    <div className="antonyms-title">
                      <h5 className="text-center">Antonyms</h5>
                      <span>({meaning.partOfSpeech})</span>
                    </div>

                    <Antonyms antonyms={meaning.antonyms} />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
