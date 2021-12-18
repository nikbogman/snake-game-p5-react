import './styles/App.css';
import React from "react";
import GameOver from './components/GameOver';
import Canvas from './components/Canvas';
import ScoreBoard from './components/ScoreBoard';
import { GameContex } from './GameProvider';

function App() {
  const { result: { resultState, setResultState } } = React.useContext(GameContex);

  document.body.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.keyCode === 13)
      setResultState(undefined);
  })

  return (
    <div className="App">
      <ScoreBoard />
      {!resultState ? <Canvas /> : <GameOver />}
    </div>
  );
}

export default App;
