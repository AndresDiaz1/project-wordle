import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessesList/GuessesList";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);

  function onSubmitGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    console.log(checkedGuess);
    const isCorrect = checkedGuess.reduce((acc, letter) => {
      letter.status === "correct" ? acc++ : null;
      return acc;
    }, 0);
    setHasWon(isCorrect === 5);
    setGuesses([
      ...guesses,
      {
        id: Math.random(),
        label: guess,
        checkedGuess,
      },
    ]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      {!hasWon && guesses.length < NUM_OF_GUESSES_ALLOWED && (
        <GuessInput onSubmitGuess={onSubmitGuess} />
      )}
      {guesses.length >= NUM_OF_GUESSES_ALLOWED && (
        <SadBanner answer={answer} />
      )}
      {hasWon && <HappyBanner numberOfGuesses={guesses.length} />}
    </>
  );
}

export default Game;
