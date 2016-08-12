import { COLORS } from './constants';
import Card from './Card';

export default class Grid {
    constructor() {
        this.size = 16;
        this.cards = [];
        this.fillCards();
    }

    fillCards() {
        for (var i = 0; i < this.size/2; i++) {
            let positions = calculatePositions(i);
            let card1 = new Card(COLORS[i]);
            let card2 = new Card(COLORS[i]);

            this.cards.push(card1)
            this.cards.push(card2);
        }
    }

    calculatePositions(index) {
        let x = index * 90 + 5;
        let y = index * 90 + 5;
    }
}
