export const PLAYER1 = 0
export const PLAYER2 = 1

class Game {
  _ended = false;
  _currentSet = 0;
  _game = [0, 0]
  _set = [[0, 0], [0, 0], [0, 0]]

  score() {
    return this._game
  }
  
  point(player) {
    if (this._ended) return
    if (this._game[player] < 30)
      this._game[player] += 15
    else if (this._game[player] < 40)
      this._game[player] += 10
    else {
      this._game = [0, 0]
      this._set[this._currentSet][player] += 1
    }
    if (this._set[this._currentSet][player] === 6)
      this._currentSet++;
    if (this._currentSet === 3) {
      this._currentSet = 2;
      this._game = [0, 0];
      this._ended = false;
    }
  }

  set(index) {
    return this._set[index]
  }
}

export default Game;
