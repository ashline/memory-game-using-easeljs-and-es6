import { COLORS } from './constants';
import Card from './Card';
let Stage = require('createjs-collection').Stage;
let _ = require('lodash');

export default class Grid {
    constructor() {
        this.size = 16;
        this.cards = [];
        this.fillCards(this.shuffleColors());
    }

    shuffleColors() {
        const cardColors = [...COLORS, ...COLORS];
        return _.shuffle(cardColors);
    }

    fillCards(cardColors) {
        for (var i = 0; i < this.size; i++) {
            var row = Math.floor(i/4);
            var column = Math.floor(i % 4);
            let x = this.calculatePosition(column);
            let y = this.calculatePosition(row);

            let card = new Card({
                color: cardColors[i],
                height: 90,
                width: 90,
                x,
                y
            });

            this.cards.push(card);
        }
    }

    isPossibleToFlipCardAt(index) {
        return !this.cards[index].faceUp;
    }

    isPossibleToFlipCard() {
        let coveredCards = _.filter(this.cards, {
            faceUp: false
        });

        return coveredCards.length ? true : false;
    }

    twoUnmatchedCardsAreFaceup() {
        let faceupCards = this.getFaceUpCards();
        return faceupCards.length === 2 ? true : false;
    }

    getFaceUpCards() {
        return _.filter(this.cards, {
            faceUp: true,
            isMatched: false
        });
    }

    coverCards() {
        let faceupCards = this.getFaceUpCards();

        _.each(faceupCards, card => {
            card.faceUp = false;
        })
    }

    anyMatchingCards() {
        let faceupCards = this.getFaceUpCards();
        if(faceupCards.length == 1) return false;

        if(faceupCards[0].color === faceupCards[1].color) return true;

        return false;
    }
    matchCards() {
        let faceupCards = this.getFaceUpCards();

        _.each(faceupCards, card => {
            card.isMatched = true;
        })
    }
    flipCard(index) {
        this.cards[index].faceUp = !this.cards[index].faceUp;
    }

    calculatePosition(index) {
        return index * 90 + index * 5 + (index + 1) * 5;
    }
}
