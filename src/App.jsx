import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">
      <h1 className="text-4xl text-center mt-8 font-bold">Tic Tac Toe Game</h1>
      <Board />
    </div>
  );
}

export default App;
