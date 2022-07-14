import Game, { PLAYER1, PLAYER2 } from './score';

function winAGame(game, player) {
  game.point(player);
  game.point(player);
  game.point(player);
  game.point(player);
}

it('First score', () => {
  const game = new Game()
  expect(game.score()).toEqual([0,0])
})

it('If player 1 scores he gets 15', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER1);
  expect(game.score()).toEqual([15, 0])
});

it('If player 2 scores he gets 15 too', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER2);
  expect(game.score()).toEqual([0, 15])
});

it('If player 1 scores twice he gets 30', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER1);
  game.point(PLAYER1);
  expect(game.score()).toEqual([30, 0])
});

it('If player 2 scores twice he gets 30', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER2);
  game.point(PLAYER2);
  expect(game.score()).toEqual([0, 30])
});

it('If player 2 scores three times he gets 40', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER2);
  game.point(PLAYER2);
  game.point(PLAYER2);
  expect(game.score()).toEqual([0, 40])
});

it('If player 1 scores three times he gets 40', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER1);
  game.point(PLAYER1);
  game.point(PLAYER1);
  expect(game.score()).toEqual([40, 0])
});

it('if a player scores 4 times he wins the game', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  game.point(PLAYER1);
  game.point(PLAYER1);
  game.point(PLAYER1);
  game.point(PLAYER1);
  expect(game.set(0)).toEqual([1, 0])
  expect(game.score()).toEqual([0, 0])
});

it('if score is 1 - 0 and player scores 4 times he wins another game, score should be 2 - 0', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  expect(game.set(0)).toEqual([2, 0]);
});

it('if a player wins 7 games he wins the first set and 1 game in the second set', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  // set
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  winAGame(game, PLAYER1)
  expect(game.set(0)).toEqual([6, 0]);
  expect(game.set(1)).toEqual([1, 0]);
})

it('if a player wins 2 sets, and wins another game score should 6 - 0, 6 - 0, 1 - 0', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  // set
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  winAGame(game, PLAYER1)
  expect(game.set(0)).toEqual([6, 0]);
  expect(game.set(1)).toEqual([6, 0]);
  expect(game.set(2)).toEqual([1, 0]);
});

it('if a player wins 3 sets the match ends', () => {
  const game = new Game()
  expect(game.score()).toEqual([0, 0])
  // set
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)
  winAGame(game, PLAYER1)

  expect(game.set(0)).toEqual([6, 0]);
  expect(game.set(1)).toEqual([6, 0]);
  expect(game.set(2)).toEqual([6, 0]);

  winAGame(game, PLAYER1)
  game.point(PLAYER1)
  expect(game.score()).toEqual([0, 0]);
  expect(game.set(0)).toEqual([6, 0]);
  expect(game.set(1)).toEqual([6, 0]);
  expect(game.set(2)).toEqual([6, 0]);
});
