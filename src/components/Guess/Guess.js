import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const gameRangeColumns = range(0, 5, 1);
  const guessWord = guess?.label ? [...guess.label] : [...""];

  return (
    <p className="guess">
      {gameRangeColumns.map((column, index) => (
        <span key={index} className="cell">
          {guessWord[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
