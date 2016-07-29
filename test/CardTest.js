import Card from '../src/Card.js';
import { IMAGES } from '../src/constants.js';

describe('Card tests', function () {

    let card;

    beforeEach(() => {
        card = new Card(IMAGES[1]);
    });

    it('should create new card', ()=>{
        expect(card).toBeDefined();
        expect(card.imageUrl).toBeDefined();
        expect(card.imageUrl).not.toEqual('');
        expect(card.visible).toEqual(false);
        expect(card.isMatched).toEqual(false);
    });

    it('should allow toggling of visibility', () => {
        card.toggleVisibility();
        expect(card.visible).toEqual(true);
        card.toggleVisibility();
        expect(card.visible).toEqual(false);
    });

    it('should prevent setting matched of invisible card', () => {
        card.setMatched();
        expect(card.isMatched).toBeFalsy();
    });

    it('should allow setting of matched', () => {
        card.toggleVisibility();
        card.setMatched();
        expect(card.isMatched).toEqual(true);
    });

    it('should prevent toggling visibility after being matched', () => {
        card.toggleVisibility();
        card.setMatched();
        card.toggleVisibility();
        expect(card.isMatched).toEqual(true);
        expect(card.visible).toEqual(true);
    });

    it('should be restorable to initial state', () => {
        card.toggleVisibility();
        card.setMatched();
        card.init();
        expect(card.isMatched).toEqual(false);
        expect(card.visible).toEqual(false);
    });

});
