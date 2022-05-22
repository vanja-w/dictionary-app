import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "../DictionaryResults/DictionaryResults";
import Photos from "../Photos/Photos";
import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  // create a state
  const [userInput, setUserInput] = useState(props.defaultWord);
  const [apiResults, setApiResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [apiPhotoResults, setApiPhotoResults] = useState(null);

  // handle user input
  function handleSearchWord(event) {
    setUserInput(event.target.value);
  }

  //handle submit
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //get API response and store it in state apiResults
  function getResponse(response) {
    setApiResults(response.data[0]);
  }

  function getResponsePexels(response) {
    setApiPhotoResults(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
    axios.get(apiUrl).then(getResponse);

    //https://www.pexels.com/api/documentation/?
    const apiKeyPexels =
      "563492ad6f9170000100000159f1220f5da4479595da5d9313ce3cd5";
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${userInput}&per_page=9`;
    const headers = { Authorization: `Bearer ${apiKeyPexels}` };
    axios.get(apiUrlPexels, { headers }).then(getResponsePexels);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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
        <Photos photos={apiPhotoResults} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
