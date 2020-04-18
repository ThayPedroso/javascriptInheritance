// Shape - superclasse
function Shape() {
    this.x = 0
    this.y = 0
}
  
// método da superclasse
Shape.prototype.move = function(x, y) {
    this.x += x
    this.y += y
    console.info('Shape moved.')
}
  
// Rectangle - subclasse
function Rectangle() {
    Shape.call(this) // chama construtor-pai.
}
  
// subclasse extende superclasse
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

let rect = new Rectangle()

console.log('Rect é uma instância de Rectangle?', rect instanceof Rectangle)// true
console.log('Rect é uma instância de Shape?', rect instanceof Shape)// true
rect.move(1, 1) // Saída: 'Shape moved.'