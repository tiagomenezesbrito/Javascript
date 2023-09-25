

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


//concat


*/

//length
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

//splice -mutates original array
const specificNames = allNames.splice(0,3);
console.log(allNames);
console.log(specificNames);

