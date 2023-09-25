/* 
Helper Methods
Most important console.log('Hello world')

document.write('hello world);
alert('hello world');
*/

/* 
Comments //
*/

/* 
statements -> instructions;
*/

/* 
variables -> store, access, modify === value
-> Declare, Assignment operator , value

let firstName = "Tiago";
console.log(firstName)

let age = 21;
console.log(age)

*/

/* 
assign value later, modify existing variable

let firstName = "Tiago"

firstName = "Fisk"
console.log(firstName)
*/


/* 
Naming Rules
->  Digits, letters, underscore, $
->  Cant start with digits
->  Case sensitive
->  CamelCase or underscore

*/


/* 
var , let, const

var -> Not used anymore

const -> can't re-assign
-> Sugestion: all variables

let -> can re-assign
-> Sugestion: variables that will change.

*/


// "" or '' No difference 
//Just don't mix the two like let name = "Tiago'


/* 
Concatenation -> Combine string values

    const firstName = "Tiago";
    const middleName = "Menezes"
    const lastName = "Brito";
    let combine = firstName + middleName + lastName;
    console.log(combine);
    console.log("Hello, my name is: "+ firstName + " " + lastName);

*/



// backticks ``



/* 
Numbers

    const number = 25;
    let pants = 2.456;

    console.log(pants);
    console.log(number + pants);
    console.log("Strings are white");

    const add = number + pants;
    const sub = number - pants;
    const multi = number * pants;
    const div = number / pants;
    console.log(add)
    console.log(sub)
    console.log(multi)
    console.log(div)


*/

/* 
Numbers aditional features
// += -= /= *= ++ -- %


    let number = 40;
    number += 30;
    number -= 30;
    number *= 2;
    number /= 4;
    number++;
    number /= 3;
    number %= 3
    number *= 100;
    number %= 4;
    console.log(number)
*/


/* 
inplicit type conversion



*/


/* 
Data types - 7 Total
primitive -> String, Number, Boolean, Null, Undefined, Symbol
Object -> Arrays, Functions, Objects

typeof -> operator (type variable) (typeof value)
*/

// String
/* const text = "Hello world";
console.log(typeof 20); */

//number
/* const anumber = 20;
console.log(typeof anumber); */

//Boolean
/* const value1 = true;
const value2 = false;
console.log(typeof value1) */

//Null
/* const result = null;
console.log(typeof result) */ // Has a bug, displays as object
// Undefined
/* let name1;
console.log(name1) */
//Symbol(ES6)




/* 
Arrays, functions and Objects
// Arrays -> [], 0 index based
index to access values and change values



    const friend1 = "Anna";
    const friend2 = "John";
    const friend3 = "Lucas";
    const friend4 = "Claudino";

    const friends = ["John","Petter","bob","suzy",friend4];

    console.log(friends);
    console.log(friends[4]);
    console.log(friends[0]);
    friends[0] = "Jonas";
    console.log(friends);

*/


/* 
Functions -> declare, invoke
reduce redundance
-> DECLARE
function functionName(Parameters){
    //Logic
}

-> INVOKE functionName()


    function message(){
        console.log("Hello world")
        console.log("How you guys are doing ?")
    }

    message();
    message();
    message();


*/


/* 
Parameters and Arguments
-> parameters when declare/define function 
-> placeholders, local vars
-> arguments -> when invoke/call/run 


    function greet(name) {
        console.log("Hello there "+ name);
    }

    //hello bob
    greet("Bob");

    //Hello Anna
    greet("Anna")

    function msg() {
        console.log("Hi");

    }
    msg(); 
*/



/* 
return
-> Default undefined
-> Values after return aren't read



    function calculate(value){
        const newValue = value * 2.54;
        console.log("the value in cm is: " + value *2.54 + " cm" )
        return newValue;

        return value * 2.54;

    }


    const width = calculate(10);
    const height = calculate(20);

    const dimensions = [width,height];
    console.log(dimensions)


*/



/* 
Function expressions -> another way to define a function
See later!!!


*/




/* 
Objects -> Key/value pairs methods
dot notation



    const person = {
        name:"Tiago",
        lastName:"Brito",
        age:21,
        education:false,
        married:false,
        siblings: ["Leônidas","Otávio"],
        greting:function (){
            console.log("Hello, my name is Tiago");
        }
    }

    console.log(person.name);
    console.log(person.lastName);
    person.greting();

    const age = person.age;
    console.log(age)




*/


/* 
Conditional Statements Basics
Comparison Operators
-> >, <, >=, <=, ==, ===,!, !=, !===
=== checks value and type
== checks only value
= Assigns a value


// if else if else





  if(2 > 1) {
    console.log("Hello");

  }

  if(2 < 1) {
    console.log("Hello");
  } else{
    console.log("heloooo");
  }



  const num1 = 4;
  const num2 = 4;
  const result = num1 == num2;

  if (num1 > num2) {
    console.log("First number is bigger than second");
  } 
  else if(result){
    console.log("Both numbers are equal");
  } else {
    console.log("second number is bigger than First");
  }

  const num1 = 4;
  const num2 = 4;
  const result = num1 == num2;

  const value = true;

  if(!value) {
    console.log("Value false");
  }
*/


/* 
Logical Operators

|| -> OR
&& -> AND

  const namep = "Peter";
  const age = 20;

  if (namep === "peter" || age > 20) {
    console.log("Adult");

  } else{
    console.log("Kid")
}

*/


/* 
Switch
case break and default

  //Dice values 1 - 6

  const dice = 1;


  switch (dice) {
    case 1: 
      console.log("You got 1");
      break;
    case 2: 
      console.log("You got 2");
      break;
    case 3: 
      console.log("You got 3");
      break;
    case 4: 
      console.log("You got 4");
      break;
    case 5: 
      console.log("You got 5");
      break;
    case 6: 
      console.log("You got 6");
      break;
      default:
        console.log("You didin't roll the dice");
  }
*/




/* 
Loops
repeat run a block of code while it's true
-> While loop
-> do while

-> You need to set the break mecanism
Turn off autosve




  let amount = 10;

  while(amount > 0) {
    console.log("I have " + amount + "Dolars and I'm going to the mall");
    amount--;

  } 
  console.log("Test");

  let money = 100;

  while(money < 10000) {
    console.log("I'm Poor because i only have: " + money + "Dolars");
    money+=1000;
  }

  console.log("teste")



*/



/* 
for loop

  let i;

  for(i = 0; i < 10; i++){
    console.log("and the number is:" + i);
  }


*/

