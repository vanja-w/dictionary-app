import React, { useState } from "react";

export default function DictionarySearch() {
  // create a state
  const [word, setWord] = useState("");

  // handle user input
  function handleSearchWord(event) {
    setWord(event.target.value);
  }

  //handle submit
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${word}"..`);
  }

  return (
    <div className="DictionarySearch">
      {/*FORM STARTS*/}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSearchWord}
          type="search"
          className="form-control-lg"
          placeholder="Search for a word"
        />
        <input type="submit" className="btn btn-primary btn-lg" />
      </form>
      {/*FORM ENDS*/}
    </div>
  );
}
