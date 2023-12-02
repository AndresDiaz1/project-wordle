import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses }) {
  const gameRangeRows = range(0, NUM_OF_GUESSES_ALLOWED, 1);
  return (
    <div className="guess-results">
      {gameRangeRows.map((row, index) => (
        <Guess guess={guesses[index]} key={index} />
      ))}
    </div>
  );
}

export default GuessesList;
