import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessesList/GuessesList";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function onSubmitGuess(guess) {
    setGuesses([...guesses, { id: Math.random(), label: guess }]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput onSubmitGuess={onSubmitGuess} />
    </>
  );
}

export default Game;
