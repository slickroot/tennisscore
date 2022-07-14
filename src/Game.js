function Game() {
  return (
    <div className="App">
      <div className="row">
        <div className="player">player 1</div>
        <div className="serving"/>
        <div className="game">30</div>
        <div className="set">2</div>
        <div className="set">4</div>
        <div className="set">1</div>
      </div>
      <div className="info">
        <div className="serv">serving</div>
        <div className="gam">game</div>
        <div className="set1">set 1</div>
        <div className="set2">set 2</div>
        <div className="set3">set 3</div>
      </div>
      <div className="row">
        <div className="player">player 2</div>
        <div className="serving"/>
        <div className="game">15</div>
        <div className="set">1</div>
        <div className="set">5</div>
        <div className="set">3</div>
      </div>
    </div>
  )
}

export default Game;
