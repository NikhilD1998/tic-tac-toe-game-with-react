import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intitalName="Player 1" symbol="X" />
          <Player intitalName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
