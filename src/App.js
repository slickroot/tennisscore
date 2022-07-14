import { useState } from 'react';
import './App.css';
import Game, { PLAYER1, PLAYER2 } from './score';

function App() {
  const [game] = useState(new Game());
  const [update, setUpdate] = useState(0);

  function point(player) {
    game.point(player)
    setUpdate(value => value + 1);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="player" onClick={() => point(PLAYER1)}>player 1</div>
        <div className="serving"/>
        <div className="game">{game.score()[PLAYER1]}</div>
        <div className="set">{game.set(0)[PLAYER1]}</div>
        <div className="set">{game.set(1)[PLAYER1]}</div>
        <div className="set">{game.set(2)[PLAYER1]}</div>
      </div>
      <div className="info">
        <div className="serv">serving</div>
        <div className="gam">game</div>
        <div className="set1">set 1</div>
        <div className="set2">set 2</div>
        <div className="set3">set 3</div>
      </div>
      <div className="row">
        <div className="player" onClick={() => point(PLAYER2)}>player 2</div>
        <div className="serving"/>
        <div className="game">{game.score()[PLAYER2]}</div>
        <div className="set">{game.set(0)[PLAYER2]}</div>
        <div className="set">{game.set(1)[PLAYER2]}</div>
        <div className="set">{game.set(2)[PLAYER2]}</div>
      </div>
    </div>
  );
}

export default App;
