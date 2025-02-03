/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import calculateWinner from "./calculateWinner";
import Square from "./Square";
import { useEffect, useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (board[i] || calculateWinner(board)) return;

    const nextBoard = board.slice();
    nextBoard[i] = xIsNext ? "X" : "O";
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.includes(null)
    ? `Next Player: ${xIsNext ? "X" : "O"}`
    : "Game Draw!";

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  useEffect(() => {
    if (winner) {
      Swal.fire({
        title: `🎉 Player ${winner} Wins!`,
        text: "Click OK to restart the game.",
        icon: "success",
        confirmButtonText: "OK",
        background: "#1a202c", // Dark background
        color: "#f0fff4", // Light green text
        iconColor: "#48bb78", // Neon green success icon
        confirmButtonColor: "#48bb78", // Green confirm button
      }).then(() => handleReset());
    } else if (!board.includes(null)) {
      Swal.fire({
        title: "🤝 It's a Draw!",
        text: "No winner this time. Click OK to restart.",
        icon: "info",
        confirmButtonText: "OK",
        background: "#1a202c",
        color: "#cbd5e0",
        iconColor: "#63b3ed",
        confirmButtonColor: "#63b3ed",
      }).then(() => handleReset());
    }
  }, [winner, board]);

  return (
    <>
      <div className="mt-5 text-center text-2xl font-bold text-gray-100">
        {status}
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-3 gap-2 p-4 bg-gray-800 rounded-lg shadow-lg">
          {board.map((value, idx) => (
            <Square
              key={idx}
              value={value}
              onSquareClick={() => handleClick(idx)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleReset}
          className="btn bg-gray-700 text-gray-100 border border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition duration-200 ease-in-out"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Board;
