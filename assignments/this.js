/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding happens when 'this' is in the global scope. 
* 2. Implicit Binding refers to myObj only in that object's scope. 
* 3. New Binding refers to an object instance only when a new constructor function is created. 
* 4. Explicit Binding refers to when .apply, .call or .bind is used on the object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Hello(name) {
    console.log(`${this.greeting} ${name}`)
  }
  
  Hello('Tommy')

// Principle 2

// code example for Implicit Binding
const greetObj ={
    greeting: 'hello',
    sayGreeting: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        
    }
}; 
greetObj.sayGreeting('Tommy'); 

// Principle 3

// code example for New Binding
function User(welcome) {
    this.greet = 'Welcome to the team ';
    this.welcome = welcome; 
    this.speak = function () {
        console.log(this.greet + this.welcome); 
 
    }
}

const playerOne = new User('Player One'); 
const playerTwo = new User('Player Two');

playerOne.speak(); 
playerTwo.speak(); 

// Principle 4

// code example for Explicit Binding

function Person(welcome) {
    this.greet = 'Welcome ';
    this.welcome = welcome; 
    this.speak = function () {
        console.log(this.greet + this.welcome); 
 
    }
}
const tommy = new User('Tommy'); 
const chris = new User('Chris');

tommy.speak.call(chris); 
chris.speak.apply(tommy);

chris.speak(); 
tommy.speak(); 