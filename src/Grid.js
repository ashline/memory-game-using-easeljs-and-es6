import { IMAGES } from './constants';
import Card from './Card';

export default class Grid {
    constructor() {
        this.size = 16;
        this.cards = [];
        this.fillCards();
    }

    fillCards() {
        for (var i = 0; i < this.size/2; i++) {
            let card1 = new Card(IMAGES[i]);
            let card2 = new Card(IMAGES[i]);

            this.cards.push(card1)
            this.cards.push(card2);
        }
    }
}
