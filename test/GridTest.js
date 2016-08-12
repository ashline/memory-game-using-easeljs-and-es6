import Grid from '../src/Grid.js';

describe('Grid tests', function () {

    let grid;

    beforeEach(() => {
        grid = new Grid();
    });

    it('set n cards', () => {
        expect(grid.cards.length).toEqual(16);
    });

    it('set card positions', () => {
        expect(grid.cards[3].x).not.toEqual(0);
        expect(grid.cards[1].x).toEqual(105);
        expect(grid.cards[1].y).toEqual(5);
    });
});
