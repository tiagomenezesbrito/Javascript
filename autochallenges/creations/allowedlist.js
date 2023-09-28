/* 
A function that verifies an array and tell who can enter and who can't. verifies only first Name.
if it is: can enter;
if it's not: can't enter;

*/


/*  OLD way
const anotherpeople = ["Rafael","Jonas","Nathan","Lucas"];

const peopleNames = ["Tiago", "Lucas", "Paulo", "Guila", "Claudino", "James"];

//Allowed List
const allowedList = ["TIAGO", "LUCAS", "PAULO", "GUILA", "CLAUDINO"];


//Gets an array
function canEnter(arr) {
    //Verifys each element
  for (let i = 0; i < arr.length; i++) {
    if (allowedList.includes(arr[i].toUpperCase())) {
      console.log(`Hello, ${arr[i]} you can enter.`);
    } else {
      console.log(`Hello ${arr[i]}, unfortunally you can't enter`);
    }
  }
}

//calling the function
canEnter(peopleNames); 
canEnter(anotherpeople);

 */




//New way using Filter method

//People List
const peopleList = ["Tiago","Lucas","John","Paulo","Akim","Claudino","Guilherme","Rafael","zohan"]
//Allowed List
const allowedList = ["TIAGO","LUCAS","PAULO","AKIM","CLAUDINO","GUILHERME"]

//function to filter
function canEnter(people){
  if(allowedList.includes(people.toUpperCase())){
    return people;
  } else{
    console.log(`Sorry ${people}, you aren't invited`);
  }
}

//Using filter method 
const enter = peopleList.filter(canEnter);
console.log(enter);










