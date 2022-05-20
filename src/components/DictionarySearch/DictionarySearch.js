import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "../DictionaryResults/DictionaryResults";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  // create a state
  const [userInput, setUserInput] = useState("");
  const [apiResults, setApiResults] = useState(null);

  // handle user input
  function handleSearchWord(event) {
    setUserInput(event.target.value);
  }

  //handle submit
  function handleSubmit(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(getResponse);
  }

  //get API response and store it in state apiResults
  function getResponse(response) {
    setApiResults(response.data[0]);
  }

  return (
    <div className="DictionarySearch">
      {/*FORM STARTS*/}
      <section>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSearchWord}
            type="search"
            className="form-control-lg"
            placeholder="Search for a word"
          />
        </form>
      </section>
      {/*FORM ENDS*/}

      <DictionaryResults apiResults={apiResults} />
    </div>
  );
}
