const Circle = require('../lib/circle')
const Square = require('../lib/square')
const Triangle = require('../lib/triangle')

function generateSvgLogo(data){
    console.log(data.text);
    console.log(data["text-colour"]);
    console.log(data.shape);
    console.log(data["shape-colour"]);
    if (data.shape === "Circle") {
        const circle = new Circle (data.text, data.shape, data["text-colour"], data["shape-colour"]);
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${circle.renderShape()}
    ${circle.renderText()}
</svg>
        `
    } else if (data.shape === "Square") {
        const square = new Square (data.text, data.shape, data["text-colour"], data["shape-colour"]);
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   ${square.renderShape()}
   ${square.renderText()}
</svg>
        `
    } else {
        const triangle = new Triangle (data.text, data.shape, data["text-colour"], data["shape-colour"]);
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${triangle.renderShape()}
    ${triangle.renderText()}
    
</svg>
        `
    }
    
    
}

module.exports = generateSvgLogo;