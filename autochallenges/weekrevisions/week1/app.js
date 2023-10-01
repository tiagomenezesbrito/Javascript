
// console.log() ->Escrever console
/* 
//Data types: strings, numbers,booleans,null, undefined, symbols, objects.

typeOf() -> identify data type

    console.log(typeof(3));
    console.log(typeof("Tiago"));
    console.log(typeof(true));
    console.log(typeof(null));
    console.log(typeof(undefined));

*/

/* 
variables 
var -> outdated
const -> constant values // use const unless you need to change
let -> values that will change


    const myName = "Tiago";
    const girlFriend = "Emile";
    console.log(myName);
    console.log(girlFriend);
    console.log(myName + girlFriend);
    console.log(`Hello, my name is: ${myName} and my girlfriend name is: ${girlFriend}`);
    const firstName = "Tiago";
    const secondName = "Brito";
    console.log(firstName + secondName);
    console.log(`Olá, meu nome é: ${firstName} e o meu segundo nome é: ${secondName}`);
*/


/* 
Arrays []-> Store lists of items.
arrays are [0] index based.

    const listFoods = ["Banana","Orange","Apple","Lemon"];

    console.log(listFoods);
    console.log(`Hello, my foods list is: ${listFoods}`);
    console.log(`Hello, my first food is: ${listFoods[0]}`);
    console.log(`Hello, my last food is: ${listFoods[2]}`);

    console.log(`My last food is: ${listFoods[listFoods.length -1]}`);
    console.log(`Minha penúltima fruta é: ${listFoods[listFoods.length - 2]}`);


    const myName = "Tiago";
    const names = [myName,"Lucas","Claudino","Paulo"];
    //console.log(names[3]);
    console.log(`${names[0]} ${names[1]}`);
    const ages = [21,21,22,21];
    console.log(ages[ages.length-2]);
*/

/* 
functions -> code that you can re-use
function functionName(parameter){
    code
}
return -> the value that the function returns

    function multiplier(number){
        const newNumber = number * 10;
        return newNumber;
    }

    const numberTimesTen = multiplier(10);
    console.log(numberTimesTen);

    function dataType(data){
        console.log(`Hello, the data type you entered is:${typeof(data)}`);
    }
    dataType("Tiago");

*/

/* 
logical operators and conditional statements
< > >= <= == === != !===
or || and &&

if (condition) {
    code
}
else if (condition) {
    code
}
else {
    code
}


switch {
    case 1: {
        break;
    }
    default {

    }



    const age = 21;

    function adult(age){
        if(age >= 18 && age<100){
            console.log("Congratulations, you are an adult");
        } 
        else if(age<18 && age>0){
            console.log("You are not an adult")
        }
        else if(age >= 100 && age<130){
            console.log("Danm you are old");
        }else{
            console.log("You typed and invalid number, maybe is to high or maybe is under 0");
        }
    }

    adult(150);

    function isAdult(age){
        if (age >=18){
            return true;
        } else {
            return false;
        }
    }

    const drinksAdults = ["Vodka","Licor","Beer","Wine","Water","Soda"];
    const drinkChilds = ["Water","Lemon Juice","Soda",];

    function drinks(age){
        if(isAdult(age)){
            console.log(`You are an adult, here is the full list of Drinks: ${drinksAdults}.`);

        } else{
            console.log(`You are not a adult, here is the children list of Drinks ${drinkChilds}.`);
        }

    }

    drinks(17);


}
*/


/* 


*/












