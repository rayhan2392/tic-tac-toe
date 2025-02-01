import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-4 font-bold">
          This is a tic tack toe game
        </h1>
        <Board />
      </div>
    </>
  );
}

export default App;
