import Grid from '../src/Grid.js';

describe('Grid tests', function () {

    let grid;

    beforeEach(() => {
        grid = new Grid();
    });

    it('set n cards', () => {
        expect(grid.cards.length).toEqual(16);
    });
});
