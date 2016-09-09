import Card from '../src/Card.js';
import { COLORS } from '../src/constants.js';

describe('Card tests', function () {

    let card;

    beforeEach(() => {
        const options = {
            color: COLORS[1],
            width: 90,
            height: 90,
            x: 5,
            y: 5
        }
        card = new Card(options);
    });

    it('should create new card', () => {
        expect(card).toBeDefined();
        expect(card.color).toBeDefined();
        expect(card.color).not.toEqual('');
        expect(card.visible).toEqual(true);
        expect(card.faceUp).toEqual(false);
        expect(card.isMatched).toEqual(false);
    });

    it('should allow flipping of card', () => {
        card.flipCard();
        expect(card.faceUp).toEqual(true);
        card.flipCard();
        expect(card.faceUp).toEqual(false);
    });

    it('should prevent setting matched of card facing down', () => {
        card.setMatched();
        expect(card.isMatched).toBeFalsy();
    });

    it('should allow setting of matched', () => {
        card.flipCard();
        card.setMatched();
        expect(card.isMatched).toEqual(true);
    });

    it('should prevent toggling visibility after being matched', () => {
        card.flipCard();
        card.setMatched();
        card.flipCard();
        expect(card.isMatched).toEqual(true);
        expect(card.faceUp).toEqual(true);
    });

    it('should be restorable to initial state', () => {
        card.flipCard();
        card.setMatched();
        card.init();
        expect(card.isMatched).toEqual(false);
        expect(card.faceUp).toEqual(false);
    });

    it('should be a shape', () => {
        expect(card.draw).toBeDefined();
    });

    it('should know its size', () => {
        expect(card.width).toBeDefined();
        expect(card.height).toBeDefined();
    });

    it('should know its position', () => {
        expect(card.x).toBeDefined();
        expect(card.y).toBeDefined();
        expect(card.y).not.toEqual(0);
        expect(card.x).not.toEqual(0);
    });
});
