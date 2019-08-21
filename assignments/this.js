/* The Four Principles of "this";

* Explain the Four Principles of the "this" keyword below.

* 1. Window Binding is a `this.` reference.
        In which there is nothing to the left of the ' . ' so the function tries to refer to the window instead.
    
* 2. Implicit Binding is a `this.` reference.
        In which the function is looking to the left of the ' . ' and finding the function is finding a reference.

* 3. New Binding is a `this.` reference.
        In which you create a constructor function, and anytime you invoke a function with the `new` keyword the `this.` 
            inside of that function is bound to the new object being constructed via the constructor function.

* 4. Explicit Binding is a `this.` reference.
        In which you are explicitly passing a `this.` context to either `.call()`, `.apply()`, or `.bind()`.


* Write out a code example of each explanation above

*/

// Principle 1

// code example for Window Binding

let yellHello = function() {
    console.log(this);
};
yellHello();

// Principle 2

// code example for Implicit Binding

let hiHuman = function(param) {
    param.hello = function() {
        console.log(`Hello ${this.name}!`);
    };
};

const me = {
    name: 'Robin'
};

const you = {
    name: 'Ted'
};

hiHuman(me);
hiHuman(you);

me.hello();
you.hello();

// Principle 3

// code example for New Binding

let Animal = function(name, home, eat) {
    this.name = name;
    this.home = home;
    this.eat = eat;
};

var tiger = new Animal("Tiger", "Grasslands", "Carnivores");

console.log(tiger);

// Principle 4

// code example for Explicit Binding

let echo = function(param1, param2, param3) {
    console.log(`My name is ${this.name} and I love ${param1}, ${param2}, and ${param3}.`);
};

let Jonathan = {
    name: "Jonathan",
    city: "Walnut Creek",
    state: "California"
};

let hobbies = ["Coding", "Gaming", "Hanging out with friends"];

echo.call(Jonathan, ...hobbies);

// Page Complete