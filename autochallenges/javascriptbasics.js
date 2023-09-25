


/* 
Basic understanding

===================
console.log
statements -> tell the computer what to do;
===================
Variables -> Store values, for later.
namingVariables
Data types -> Strings, numbers, booleans, null and undefined, symbols and objects.
typeof

===================
arrays -> Store infinite values, and arrays. Like a  storage
arrays are 0 index based.
===================
===================
Functions -> Build code to re-use  we usually return a value
function functionName(Parameters) {
    logic
}
to call -> functionName(Arguments);
===================

===================
Objects

*/



/* 
Just making stuff

    const number1 = 1;
    const astring = "This is a string";
    const thisistrue = true;

    const myarray = ["number1",number1];
    console.log(myarray);
    console.log(myarray[1]);

    const smallitems = ["pencil","Paper","eraser","book"];
    const bigitems = ["House","Car","Plane","Boat"];
    const randomitems = [24,"27",true,null,undefined,"random"];

    const myitems = [smallitems,bigitems,randomitems];
    console.log(myitems);
    console.log(myitems[0]);
    console.log(myitems[1]);
    console.log(myitems[0][2]);
    console.log(myitems[2][5]);

    const ramdom1 = myitems[2][5];
    console.log(ramdom1);

    console.log("Hello my friends")
    const myname = "Tiago";
    console.log(`Hello, my name is: ${myname}`);


    Grade result

    const grade1 = 7;
    const grade2 = 9;
    const grade3 = 5;

    function result(n1,n2,n3){
        result = (n1 + n2 + n3)/3;
        return result;
    }

    const mygrade = result(grade1,grade2,grade3);
    console.log(mygrade);


    Function that makes arrays ?


    function makearray (x1,x2,x3,x4) {
        const makearray = [x1,x2,x3,x4];
        return makearray;
    }

    const teste = makearray(34,36,32,28);
    console.log(teste);
    const anotherarray = makearray("items","Games","Football","Basketball");
    console.log(anotherarray);
    console.log(anotherarray[3])


    function that tells if a number is par ?

    const numbertest = 12;
    const numbertest2 = 1;

    function ispar (number) {
        const ispar = number % 2
        if (ispar != 0){
            console.log("This number is ímpar");
        }else {
            console.log("This number is par");
        }
    
    }

    ispar(numbertest);
    ispar(numbertest2);

*/


const number1 = 21;
const number2 = "2";
const number3 = [2,5,6];

console.log(typeof(number1));
console.log(typeof(number2));
console.log(typeof(number3));

/* 
Function that tells the value of a data type

*/

function whatData(data) {
    const whatData = typeof(data);

    console.log(`Your Data type is: ${whatData}`);

}

const bigBox = [];

whatData(bigBox);







