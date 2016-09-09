import Grid from '../src/Grid.js';
let { _ } = window;

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

    it('should have 8 colors only', () => {
        let colors = Object.keys(_.countBy(grid.cards, 'color'));
        expect(colors.length).toEqual(8);
    });
});
