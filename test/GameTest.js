import Game from '../src/index';

describe('Game tests', function() {
    let game;

    beforeEach(() => {
        game = new Game();
        game.init();
    });

    it('should set initial state of game', () => {
        expect(game.grid).toBeDefined();
        expect(game.stage).toBeDefined();
        expect(game.stage.children.length).toEqual(16);
    });

    it('should not have 3 uncovered unmatched cards', () => {
        game.flipCard(0);
        game.flipCard(3);
        game.flipCard(5);
        expect(game.grid.cards[0].faceUp).toBeFalsy();
        expect(game.grid.cards[3].faceUp).toBeFalsy();
        expect(game.grid.cards[5].faceUp).toBeTruthy();
    });
    it('should match 2 uncovered matching cards', () => {
        game.flipCard(0);
        game.flipCard(8);
        expect(game.grid.cards[0].isMatched).toBeTruthy();
        expect(game.grid.cards[8].isMatched).toBeTruthy();
    });
    // it('should cover cards that are not matching', () => {
    //     game.flipCard(0);
    //     game.flipCard(1);
    //     expect(game.grid.cards[0].isMatched).toBeFalsy();
    //     expect(game.grid.cards[1].isMatched).toBeFalsy();
    //     expect(game.grid.getFaceUpCards().length).toEqual(0);
    // });
});
