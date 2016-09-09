import Game from '../src/index';

describe('Game tests', function() {
    let game;

    beforeEach(() => {
        game = new Game();
        game.init();
    });

    function flipCard(index) {
        game.grid.cards[index].faceUp = !game.grid.cards[index].faceUp;
    }

    // it('should set initial state of game', () => {
    //     spyOn(game, 'init');
    //     game
    //     expect(game.grid)
    // });

    it('should set initial state of game', () => {
        expect(game.grid).toBeDefined();
        expect(game.stage).toBeDefined();
        expect(game.stage.children.length).toEqual(16);
    });

    it('should not have 3 uncovered unmatched cards', () => {
        flipCard(0);
        flipCard(3);
        flipCard(5);
        expect(game.grid.cards[0].faceUp).toBeFalsy();
        expect(game.grid.cards[3].faceUp).toBeFalsy();
        expect(game.grid.cards[5].faceUp).toBeTruthy();

    });
});
