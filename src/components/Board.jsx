/* eslint-disable react/prop-types */
import calculateWinner from "./calculateWinner";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));//['X', null, null, null, null, 'O', null, null, null]
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (board[i] || calculateWinner(board)) {
      return;
    }
    const nextBoard = board.slice();
    if (xIsNext) {
      nextBoard[i] = "X";
    } else {
      nextBoard[i] = "O";
    }
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <>
     <div className="mt-5 text-center text-2xl font-bold ">{status}</div>
      <div className="flex justify-center mt-4 align-center">
       
        <div className="grid grid-cols-3">
          {board.map((value, idx) => {
            return (
              <Square
                key={idx}
                value={value}
                onSquareClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={handleReset} className="btn text-center">Reset</button>
      </div>
    </>
  );
};

export default Board;
