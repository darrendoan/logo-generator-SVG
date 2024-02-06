class Circle {
    text;
    shape;
    textColour;
    shapeColour;
    constructor(text, shape, textColour, shapeColour) {
        this.text = text;
        this.shape = shape;
        this.textColour = textColour;
        this.shapeColour = shapeColour;
    }
    get text() {
        return this.text;
    }
    get shape() {
        return this.shape;
    }
    get textColour() {
        return this.textColour;
    }
    get shapeColour() {
        return this.shapeColour;
    }
    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill='${this.shapeColour}'/>`
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`
    }
}

module.exports = Circle
