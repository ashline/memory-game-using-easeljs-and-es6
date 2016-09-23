import Game from '../src/index';
let _ = require('lodash');

describe('Game tests', function() {
    let game;

    beforeEach(() => {
        game = new Game();
        game.init();
    });

    function getCardsDifferentFrom(index) {
        return _.compact(_.map(game.grid.cards, function(card, idx) {
            if (index != idx && card.color != game.grid.cards[index].color) return idx;
        }));
    }

    function getCardSimilarTo(index) {
        return _.findIndex(game.grid.cards, (card, cardIndex) => {
            return index != cardIndex && card.color === game.grid.cards[index].color;
        });
    }

    it('should set initial state of game', () => {
        expect(game.grid).toBeDefined();
        expect(game.stage).toBeDefined();
        expect(game.stage.children.length).toEqual(16);
    });

    it('should not have 3 uncovered unmatched cards', () => {
        const baseCard = 0;
        const differentCards = getCardsDifferentFrom(baseCard);

        game.flipCard(baseCard);
        game.flipCard(differentCards[0]);
        game.flipCard(differentCards[1]);//hazard
        expect(game.grid.cards[baseCard].faceUp).toBeFalsy();
        expect(game.grid.cards[differentCards[0]].faceUp).toBeFalsy();
        expect(game.grid.cards[differentCards[1]].faceUp).toBeTruthy();
    });

    it('should match 2 uncovered matching cards', () => {
        const baseCard = 0;
        const similarCard = getCardSimilarTo(baseCard);

        game.flipCard(baseCard);
        game.flipCard(similarCard);
        expect(game.grid.cards[baseCard].isMatched).toBeTruthy();
        expect(game.grid.cards[similarCard].isMatched).toBeTruthy();
    });

    it('should cover cards that are not matching', (done) => {
        const baseCard = 0;
        const differentCards = getCardsDifferentFrom(baseCard);

        game.flipCard(baseCard);
        game.flipCard(differentCards[0]);

        expect(game.grid.cards[baseCard].isMatched).toBeFalsy();
        expect(game.grid.cards[differentCards[0]].isMatched).toBeFalsy();
        setTimeout(function() {
            expect(game.grid.getFaceUpCards().length).toEqual(0);
            done();
        }, 1000);
    });

    it('should not flip card that is already flipped', () => {
        game.flipCard(0);
        game.flipCard(0);
        expect(game.grid.cards[0].faceUp).toBeTruthy();
    });

    it('should be able to shuffle cards', () => {
        const firstCardsColors = _.map(game.grid.cards, 'color');
        game = new Game();
        const secondCardsColors = _.map(game.grid.cards, 'color');
        let areCardsTheSame = _.isEqual(firstCardsColors, secondCardsColors);

        expect(areCardsTheSame).toBeFalsy();
    });

    it('should flip card a at specific coordinates', () => {
        //
    });
});
