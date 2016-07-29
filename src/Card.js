export default class Card {
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
        this.init();
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
