let Shape = window.createjs.Shape;

export default class Card extends Shape {
    constructor(options) {
        super();
        Object.assign(this, options);
        this.init();
        return this;
    }

    toggleVisibility() {
        if (!this.isMatched) {
            this.visible = !this.visible;
        }
    }

    setMatched() {
        if (this.visible) {
            this.isMatched = true;
        }
    }

    init() {
        this.visible = false;
        this.isMatched = false;
    }
}
