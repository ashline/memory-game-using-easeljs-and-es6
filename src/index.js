import "babel-polyfill";
import Grid from './Grid';
import { DEFAULT_COLOR } from './constants';

var createjs = require('createjs-collection');
var _ = require('lodash');


export default class Game {
    constructor() {
        this.isGameOver = false;
        this.grid = new Grid();
        this.stage = new createjs.Stage("demoCanvas");
    }


    addCardsToStage() {
        for (var i = 0; i < this.grid.cards.length; i++) {
            this.stage.addChild(this.grid.cards[i]);
        }
    }

    init() {
        // reset grid
        //clear stage
        this.addCardsToStage();
        this.updateStage();
    }

    updateStage() {
        this.drawCards();
        this.stage.update();
    }

    drawCards() {
        let color = DEFAULT_COLOR;
        _.each(this.grid.cards, card => {
            if(card.faceUp) {
                color = card.color;
            }
            card.graphics.beginFill(color).drawRect(0, 0, card.width, card.height);
        });
    }

    coverUnmatchedCards() {
        const twoUnmatchedCardsAreFaceup = this.grid.twoUnmatchedCardsAreFaceup();
        if(twoUnmatchedCardsAreFaceup) {
            this.grid.coverCards();
        }
    }

    flipCard(index) {
        const isPossibleToFlipCard = this.grid.isPossibleToFlipCard();
        const isPossibleToFlipCardAt = this.grid.isPossibleToFlipCardAt(index);

        this.coverUnmatchedCards();

        if(isPossibleToFlipCard && isPossibleToFlipCardAt) {
            this.grid.flipCard(index);
            if(this.grid.anyMatchingCards()) {
                this.grid.matchCards();
            } else {
                setTimeout( () => {
                    this.grid.coverCards();
                }, 1000);
            }
        }
    }
}

function initGame() {
    var game = new Game();
    game.init();
}

window.onload = () => {
    console.log('game loaded');
    initGame();
}
