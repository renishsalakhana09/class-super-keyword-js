# class-super-keyword-js
## JavaScript super keyword example explained 

## `super = Reference to the parent class (super class) Very similar to "this" keyword Can use a super classes: constructor, methods`

# JavaScript Class Reference

## `1. constructor()`
### Example:

```javascript 
class Car {
  constructor(brand) {  // Constructor
    this.carname = brand;
  }
}
mycar = new Car("Ford");
```
`constructor()` is an ECMAScript6 (ES6) feature.

### Syntax:
```javascript 
constructor(parameters)
```
## `2. extends`
### Example:
```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
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
```
`extends` is an ECMAScript6 (ES6) feature.

### Syntax:
```javascript
class childClass extends parentClass
```
## `3. static`
### Example:
```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {  // static method
    return "Hello!!";
  }
}

mycar = new Car("Ford");

//Call 'hello()' on the class Car:
document.getElementById("demo").innerHTML = Car.hello();

//and NOT on the 'mycar' object:
//document.getElementById("demo").innerHTML = mycar.hello();
//this would raise an error.
```
`static` is an ECMAScript6 (ES6) feature.

### Syntax:
```javascript
static methodName()
```
## `4. super`
### Example :
```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
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
```
`super` is an ECMAScript6 (ES6) feature.

### Syntax:
```javascript 
super(arguments);  // calls the parent constructor (only inside the constructor)
super.parentMethod(arguments);  // calls a parent method
```
### Class Methods
`constructor()` :	A special method for creating and initializing objects created within a class 

### Class Keywords 

`extends`:	Extends a class (inherit)\
`static` :  Defines a static method for a class\
`super`  :  Refers to the parent class
