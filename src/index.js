// import "babel-polyfill";
import Grid from './Grid';
import DEFAULT_COLOR from './constants';
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
        this.addCardsToStage();
        this.updateStage();
    }

    updateStage() {
        this.drawCards();
        this.stage.update();
    }

    drawCards() {
        let color = 'gray';
        _.each(this.grid.cards, card => {
            if(card.faceUp) {
                color = card.color;
            }
            card.graphics.beginFill(color).drawRect(0, 0, card.width, card.height);
        });
    }

    flipCard(index) {
        var isPossibleToFlipCard = this.grid.isPossibleToFlipCard();
        var twoUnmatchedCardsAreFaceup = this.grid.twoUnmatchedCardsAreFaceup();

        if(twoUnmatchedCardsAreFaceup) {
            this.grid.coverCards();
        }

        if(isPossibleToFlipCard) {
            this.grid.flipCard(index);
            if(this.grid.anyMatchingCards()) {
                this.grid.matchCards();
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
