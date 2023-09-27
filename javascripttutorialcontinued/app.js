

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



/* 
variable lookup
// {} -> first local scope -> global

    const globalNumber = 5;

    function add(num1,num2){
        const globalNumber = 10;
        return num1 + num2 + globalNumber;   
    }

    console.log(add(3,5));
*/




/* 
// Callback functions, higher order Functions, Functions as first class Objects Citizens

// Functions are first class objects -> stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher order function -> accepts another function as an argument or returns another another function as a result

// Callback function -> passed to a another function as an argument and executed inside that function



    function morning (name) {

        // console.log(`Good Morning ${name}`)
        return `Good morning ${name}`;
    }


    function greet (name, callBack) {
        
        const myName = "Tiago";
        console.log(`${callBack(name)}, my name is ${myName}`);

    }


    greet("Lucas",morning);
    greet("Zohan",morning);

*/



/* 
// Powerfull Array methods
// forEach, map, filter, find, reduce
// iterate over array - NO FOR LOOP REQUIRED

// Accept CALLBACK function as argument, calls callback against each item in a array. Reference item in the callback paramater

*/

//forEach
//Does not return new array
// Só precisamos passar a função e o forEach vai invocar a mesma para cada elemento do array.
/*  
    const people = [
    {name:"Bob",age:20,position:"Developer"},
    {name:"Peter",age:22,position:"Designer"},
    {name:"Susy",age:25,position:"front-end"},

    ];

    function showPerson(person){
        console.log(person.position.toUpperCase()); 
    }

    people.forEach(showPerson);

    people.forEach(function(item){
        console.log(item.age)
    })



    const arraytest = [
        {name:"car", price:20000},
        {name:"boat", price:60000},
        {name:"small-plane", price:1000000},
        {name:"Big-plane", price:10000000},

    ];

    function namePrice(object) {
        console.log(`Hello, this is a: ${object.name} and the price is: ${object.price} `);
    }

    arraytest.forEach(namePrice);
*/




//map IMPORTANT TO LEARN!!!
//Return a new array
// Does not change the size from the original array
// Uses value from the new array when making one
/*  

    const people = [
    { name: "Bob", age: 20, position: "Developer" },
    { name: "Peter", age: 22, position: "Designer" },
    { name: "Susy", age: 25, position: "front-end" },
    ];

    const ages = people.map(function(person){
        console.log(person);
        return person.age +20;

    });

    const newPeople = people.map(function(person){
        return {
            firstName:person.name.toUpperCase(),
            oldAge: person.age +30,
        
        }
    })

    //console.log(people);
    console.log(newPeople);
    //console.log(ages);

    const names = newPeople.map(function(person){
        return  `<h1>${person.firstName}</h1>`   
    })
    console.log(names)

    //document.body.innerHTML = names.join('') LATER!!!
*/


//filter
//Return new array
//Can manipulate the size of new array
//