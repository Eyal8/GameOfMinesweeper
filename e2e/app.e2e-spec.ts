import { GameOfMinesweeperPage } from './app.po';

describe('game-of-minesweeper App', () => {
  let page: GameOfMinesweeperPage;

  beforeEach(() => {
    page = new GameOfMinesweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
