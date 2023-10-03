/* 
Basic understanding

console.log -> Write something on the screen
comments -> // 

statements -> tell the computer what to do;

Variables -> Store values, for later.
const let e var.
assign value later
namingRules 
Data types -> Strings, numbers, booleans, null and undefined, symbols and objects.
//typeof()
concatenation -> combine string values
backticks -> `` using them, you can use ${} and put code inside strings.


numbers
// += -= /= *= ++ -- %

arrays [0] -> Store infinite values, and arrays. Like a  storage
arrays are 0 index based.
Use the index to access the values.
*/




/*  
Functions -> Build code to re-use  we usually return a value
// You can declare and invoke.

//Declare
function functionName(Parameters) {
    logic
    return 
}

//Invoke or call -> functionName(Arguments);

Parameters and arguments
//return -> the value the function returns. Default is undefined.

Global and Local scope

function expressions (Later)


// Objects -> key value pairs and methods
dot notation

*/




/* 
Comparison Operators
// >, <, >=, <=, ==, ===,!, !=, !===

Logical Operators
|| -> OR
&& -> AND

Conditional Statements

if (condition) {
    code
}
else if (condition) {
    code
} else {
    code
}


Switch
case break and default


switch () {
    case 1:
        code
        break;
    case 2: 
        code
        break;
    default:
        code
        
} 
If default is not the last case in the switch block, remember to end the default case with a break.
*/




/* 
Loops
repeat run a block of code while it's true
//If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.



while (condition) {
    code
    i++ -> increase the counter
}



    valor do contador; condição de parada; acrescente o contador
for (let =i; i <10; i++) {
    code
}

ex:

    let money = 10;

    for(let i=0; i<20;i++) {
        money += 100;
        console.log(money);
    }

*/




// /////////////////////////////////////////////////////////////////////////////////

// Javascript Tutorial continued

/*  
String properties and methods

.length -> Show the length of the string
.toLowerCase() -> put all the string in lower case
.toUpperCase() -> put all the string in upper case
.charAt() Works like index on arrays
.indexOf  //Indicates the position of a caracter. if you don't have returns -1
.trim() -> cuts white space
.startsWith() ???
.includes() checks if the string includes a caracter
.slice() slices the string ???

chaining 
    console.log(text.trim().toLowerCase().startsWith("t"));



    const myString = "  Tiagão";

    console.log(myString.length);
    console.log(myString.toUpperCase());
    console.log(myString.toLowerCase());
    console.log(myString.charAt(2));
    console.log(myString.indexOf("o"));
    console.log(myString.trim());
    console.log(myString.includes("T"));

    const sliced = myString.slice(3,5);
    console.log(sliced);


*/


