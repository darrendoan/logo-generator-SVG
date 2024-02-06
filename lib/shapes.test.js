// const { describe } = require('yargs');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


describe('CreateShape', () => {
  
    describe('testing shape attribute', () => {
      it('should return true if circle attribute is equal', () => {
        const circle = new Circle ('zap', 'circle', 'Red', 'Purple')
        
        expect(circle.shape).toEqual('circle');
        expect(circle.text).toEqual('zap');
        expect(circle.textColour).toEqual('Red');
        expect(circle.shapeColour).toEqual('Purple');
    
      });

      it('should return true if square attribute is equal', () => {
        const square = new Square ('paz', 'square', 'Yellow', 'Red')
        
        expect(square.shape).toEqual('square');
        expect(square.text).toEqual('paz');
        expect(square.textColour).toEqual('Yellow');
        expect(square.shapeColour).toEqual('Red');
    
      });

      it('should return true if triangle attribute is equal', () => {
        const triangle = new Triangle ('ssa', 'triangle', 'Purple', 'Red')
        
        expect(triangle.shape).toEqual('triangle');
        expect(triangle.text).toEqual('ssa');
        expect(triangle.textColour).toEqual('Purple');
        expect(triangle.shapeColour).toEqual('Red');
    
      });
    });
});
describe('SVG Test', () => {
    describe('Test SVG markup', () => {
       it('should return true if circle renders correctly', () => {
           const circle = new Circle ('zap', 'circle', 'Yellow', 'Green')
           console.debug(circle.renderText())
        //    expect(circle.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="Yellow">zap</text>');
           expect(circle.renderShape()).toBe(`<circle cx="150" cy="100" r="80" fill='Green'/>`);
         });
    
         it('should return true if square attribute is equal', () => {
           const square = new Square ('paz', 'square', 'Red', 'Green') 
           expect(square.renderShape()).toEqual(`<rect width="300" height="200" fill='Green' />`);
           expect(square.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">paz</text>');
         });
    
         it('should return true if triangle attribute is equal', () => {
           const triangle = new Triangle ('ssa', 'triangle', 'Orange', 'Green')
           
           expect(triangle.renderShape()).toEqual('<polygon points="150,10 250,190 50,190" fill="Green" />');
           expect(triangle.renderText()).toEqual('<text x="150" y="150" font-size="60" text-anchor="middle" fill="Orange">ssa</text>');
       
         });
    });
});