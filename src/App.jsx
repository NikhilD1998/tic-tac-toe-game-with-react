import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSqaure() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intitalName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            intitalName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSqaure}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
