

/* 
String properties and methods

cont person = {
    name: "Tiago" //Property
    greting() {
        //Method
        console.log("Hello i'm tiago"); 
    }



.lenght
.toLowerCase()
.toUpperCase()
.charAt()
.indexOf  //Indicates the position of a caracter. if you don't have returns -1
.trim()
.startsWith()
.includes()
.slice()



    chaining 
    console.log(text.trim().toLowerCase().startsWith("t"));

    let text = "Tiago jordan";
    console.log(text.length)

    console.log(text.toLowerCase());
    console.log(text.toUpperCase());
    console.log(text.charAt(0));
    console.log(text.charAt(text.length-1));
    console.log(text.indexOf('o'));
    console.log(text.trim());
    console.log(text.trim());
    console.log(text.startsWith("T"));
    console.log(text.trim().toLowerCase().startsWith("t"));
    console.log(text.includes("iago"));
    console.log(text.slice(1,5));
    console.log(text.slice(-3));




*/


/* 
Template Literals

backtick characters `` To use interpolation you need to use backticks ?
Interpolation ${} - insert expressions
Now you don't need to keep using concatenation


    const myname = "Tiago";
    const age = 22;

    const value = ` Hey, it's ${myname}, i'm ${age} years old. How old are you ?`;
    console.log(value);


*/



/* 
Array properties and Methods

//length number of items
    let names = ["Tiago", "Lucas" , "Emile","Julia"];
    console.log(names[names.length-1]);

//concat
    const lastNames = ["pepper","onion","banana"];
    const allNames = names.concat(lastNames);
    console.log(allNames);

//reverse
console.log(allNames.reverse());                   

//unshift
    allNames.unshift("Jonas")
    console.log(allNames);


//shift
    allNames.shift();
    allNames.shift();
    allNames.shift();
    allNames.shift();
    console.log(allNames);

//push
    allNames.push("Caine");
    console.log(allNames);

//pop   
    allNames.pop();
    console.log(allNames)

//splice -mutates original array     (starting item , Number of items)
    const allNames = ["Tiago","John","Pedro","Rafael"]
    const specificNames = allNames.splice(0,1);
    console.log(allNames);
    console.log(specificNames);
*/


/* 
Reference vs value

primitive data types
typeof


// When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value.

//When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

    const number = 1;
    let number2 = number;
    number2 = 3
    console.log(number);
    console.log(number2);

    let person = {name: "Tiago"};
    let person2 = person;
    person2.name = "Susy";
    console.log(person2.name)
    console.log(person.name)


*/


/*

// Null and undefined
//both represent no value
-> undefined -> javascript can't find value for this
variable without value
missing function arguments 
missing object properties


-> null -> Developer sets the value


*/



/* 
truthy and falsy
// "",'',``,0,-0,NaN,false,null,undefined  -> falsy
the rest is truthy


    const number = 0;

    if(number){
        console.log("Hello");
        
    }else {
        console.log("falsy");
    }


*/


/* 
Operators

//unary operator ->ex: typeof


//binary operator ->ex: assignment
let number = 3;
let number2 = 2 + 5;



//ternary operator 
//condition ? (runs if it's true) : (runs if false)

    using ternary:
    const value = 1 > 0;
    value ? console.log("Value it's true") : console.log("value it's false");


    not using ternary:
    const value2 = 2 > 1;
    if(value2) {
        console.log("True");
    } else {
        console.log("false");
    }
*/



/* 
//Global scope vs Local scope


//GLOBAL SCOPE
-> any variable outside code block {} is Global scope
-> global scope can be access anywhere in the program
-> gotchas: name colisions, modify by mistake.


    const globalVar = "This is global";

    function testingglobal() {
        //some code
        console.log(globalVar);
    }
    testingglobal();

    
// LOCAL SCOPE
-> Can not be access from outside code blocks
//if not var

    function testinglocal(){
        //some code
        const localVar = "this is local";
        console.log(localVar);
    }

    testinglocal();
    console.log(localVar);


*/




