// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

/* const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = "chicago";
// delete property
// delete person.siblings;
const siblings = delete person.siblings;
console.log(siblings);

console.log(person);
 */

// nested objects
// set variable as property value
// dot notation vs bracket notation

/* const age = 40;
let random = 'random-value';
random = 'age';
const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
console.log(person['name']);
console.log(person['random-value']);

console.log(person[random]);
 */



// this
// points to the left of the dot

/* const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: 'peter',
  lastName: 'sanders',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();

 */

/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
  console.log(this);
}

const john = {
  name: 'john',
  showThis: showThis,
};
const bob = {
  name: 'bob',
  showThis: showThis,
};

john.showThis();
bob.showThis();

showThis();
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);
btn2.addEventListener('click', function () {
  showThis();
});
