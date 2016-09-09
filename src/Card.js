let Shape = require('createjs-collection').Shape;

export default class Card extends Shape {
    constructor(options) {
        super();
        Object.assign(this, options);
        this.init();
        return this;
    }

    flipCard() {
        if (!this.isMatched) {
            this.faceUp = !this.faceUp;
        }
        //grid should check state of other cards
            // if 2 cards are up check colors
                // if they match then set their isMatched to true  || visible false
                    // check if there are still unmatched cards
                        // if not game over
                // if not then set their faceUp to false
                // card face down automatic after ~1 second
    }

    setMatched() {
        if (this.faceUp) {
            this.isMatched = true;
        }
    }

    init() {
        this.faceUp = false;
        this.isMatched = false;
    }
}
