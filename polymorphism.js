class Shape {
  constructor(input) {
    this.input = input;
  }
  areaof() {
    return "Area of";
  }
}

class Circle extends Shape {
  constructor(input) {
    super(input);
  }
  area() {
    console.log(`${this.areaof()} Cricle: ${3.14 * this.input * this.input}`);
  }
}

class Square extends Shape {
  constructor(input) {
    super(input);
  }
  area() {
    console.log(`${this.areaof()} Square: ${this.input * this.input}`);
  }
}
class Rectangle extends Shape {
  constructor(input, breadth) {
    super(input);
    this.breadth = breadth;
  }
  area() {
    console.log(`${this.areaof()} Rectangle: ${this.input * this.breadth}`);
  }
}

let circle = new Circle(7);
let sqr = new Square(7);
let rect = new Rectangle(8, 9);
let rect1 = new Rectangle(10, 7);

circle.area();
sqr.area();
rect.area();
