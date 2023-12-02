import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const gameRangeColumns = range(0, 5, 1);

  return (
    <p className="guess">
      {gameRangeColumns.map((column, index) => (
        <span
          key={index}
          className={`cell ${
            guess?.checkedGuess ? guess?.checkedGuess[index].status : ""
          }`}
        >
          {guess?.checkedGuess ? guess?.checkedGuess[index].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
