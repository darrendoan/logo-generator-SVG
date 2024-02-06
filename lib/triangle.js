class Triangle {
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
        return `<polygon points="150,10 250,190 50,190" fill="${this.shapeColour}" />`
    }
    renderText() {
        return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`
    }
}

module.exports = Triangle