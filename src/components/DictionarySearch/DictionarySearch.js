import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "../DictionaryResults/DictionaryResults";

let countSubmit = 0;
let countGetResponse = 0;

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

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(getResponse);
    countSubmit++;
    console.log("countSubmit " + countSubmit);
  }

  //get API response and store it in state apiResults
  function getResponse(response) {
    setApiResults(response.data[0]);
    countGetResponse++;
    console.log("countGetResponse " + countGetResponse);
  }

  return (
    <div className="DictionarySearch">
      {/*FORM STARTS*/}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSearchWord}
          type="search"
          className="form-control-lg"
          placeholder="Search for a userInput"
        />
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
      {/*FORM ENDS*/}

      <DictionaryResults apiResults={apiResults} />
    </div>
  );
}
