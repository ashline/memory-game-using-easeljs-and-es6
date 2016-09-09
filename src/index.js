import "babel-polyfill";
import Grid from './Grid';

export default class Game {
    constructor() {
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
        this.stage.update();
    }

    flipCard(index) {

    }
}

function initGame() {
    var game = new Game();
    game.init();
}

window.onload = () => {
    initGame();
}
