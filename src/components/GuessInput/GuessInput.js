import React from "react";

function GuessInput({ onSubmitGuess }) {
  const [inputValue, setInputValue] = React.useState("");

  function setValue(inputValue) {
    let inputTosend = inputValue;
    if (inputValue.length > 5) {
      inputTosend = inputValue.slice(0, 5);
    }
    setInputValue(inputTosend);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitGuess(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setValue(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
