class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayMessage(message) {
      console.log(`${this.name} says: ${message}`);
    }
  }
  
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  console.log(person1.name);
  console.log(person1.age);
  person1.displayMessage("Hello, world!");
  
  console.log(person2.name);
  console.log(person2.age);
  person2.displayMessage("Nice to meet you!");
  
  class Book {
      constructor(title, author, year) {
          this.title = title;
          this.author = author;
          this.year = year;
      }

      getInfo() {
          return `${this.title}:${this.author}:${this.year}`;
      }
  }

  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

  console.log(book1.getInfo());
  console.log(book2.getInfo());

  class Shape {
      getType() {
          return "generic shape";
      }
  }

  class Rectangle extends Shape {
      constructor(length, width) {
          super();
          this.length = length;
          this.width = width;
      }

      getArea() {
          return this.length * this.width;
      }

      getPerimeter() {
          return 2 * (this.length + this.width);
      }

      getType() {
          return "rectangle";
      }
  }

  const rectangle1 = new Rectangle(5, 3);
  const rectangle2 = new Rectangle(7, 4);

  console.log(rectangle1.getArea());
  console.log(rectangle1.getPerimeter());
  console.log(rectangle2.getArea());
  console.log(rectangle2.getPerimeter());

  const shape = new Shape();
  const rectangle3 = new Rectangle(6, 4);

  console.log(shape.getType());
  console.log(rectangle3.getType());

  console.log(rectangle3.getArea());
  console.log(rectangle3.getPerimeter());