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


*/

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


/*
BAD WAY TO DO

function hello() {
    console.log("Hello there bob");
}
function helloanna() {
    console.log("Hello there anna");
}

//greet bob
hello();

//greet anna
helloanna();
 */
