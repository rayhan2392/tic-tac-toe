/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="btn w-20 h-20 flex items-center justify-center text-3xl font-black 
                 bg-gray-700 text-gray-200 border-2 border-gray-600 rounded 
                 hover:bg-gray-600 transition-all"
    >
      {value}
    </button>
  );
};

export default Square;
