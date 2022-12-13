//class declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let rectangle = new Rectangle();

//unnamed class expression
let newRectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//named class expression
let otherRectangle = class RectangleClass {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(otherRectangle.name);// logs - RectangleClass
console.log(newRectangle.name); // logs - newRectangle