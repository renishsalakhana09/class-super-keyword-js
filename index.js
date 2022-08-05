// super = Reference to the parent/super class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods

class Person {
  constructor(name, age) { // Constructor is a special method that is called when an object is created
    this.name = name; // this refers to the current object
    this.age = age ; // this is a reference to the current instance of the class
  }
  great() { // Method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
  }
}

class Student extends Person {
  constructor(name, age, spi) {
    super(name, age) ; // super is a reference to the parent/super class
    this.spi = spi ;
  }
  hello() {
    super.great() ;
    console.log(`SPI i got is ${this.spi}`) ;
  }
}

class Teacher extends Person {
  constructor(name, age, salary) {
    super(name, age) ;
    this.salary = salary ;
  }
  hello() {
    super.great() ;
    console.log(`My salary is ${this.salary}`) ;
  }
}

let student = new Student("Alise", 21, 2.0);
let teacher = new Teacher("Bob", 45, 30);

//console.log(student.name);
//console.log(student.age);
//console.log(student.gpa);

//console.log(teacher.name);
//console.log(teacher.age);
//console.log(teacher.classSize);

student.hello();
teacher.hello();

/////////////////////////////////////////////////////////////////////////////////////
// you can also use a return statement to return a value from a method


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname; // with return you can return a value from a method
    }
  }

  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show();