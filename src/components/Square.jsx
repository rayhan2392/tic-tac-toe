/* eslint-disable react/prop-types */

// import { useState } from "react";

const Square = ({ value,onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="btn text-3xl font-black border-2 w-20 h-20">
      {value}
    </button>
  );
};

export default Square;
