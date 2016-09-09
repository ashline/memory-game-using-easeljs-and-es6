import { COLORS } from './constants';
import Card from './Card';
let Stage = require('createjs-collection').Stage;

export default class Grid {
    constructor() {
        this.size = 16;
        this.cards = [];
        this.fillCards();
    }

    fillCards() {
        for (var i = 0; i < this.size; i++) {
            var row = Math.floor(i/4);
            var color = Math.floor(i % 8);
            var column = Math.floor(i % 4);
            let x = this.calculatePosition(column);
            let y = this.calculatePosition(row);

            let card = new Card({
                color: COLORS[color],
                height: 90,
                width: 90,
                x,
                y
            });

            this.cards.push(card);
        }
    }

    calculatePosition(index) {
        return index * 90 + index * 5 + (index + 1) * 5;
    }
}
