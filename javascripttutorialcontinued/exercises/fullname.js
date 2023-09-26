// Arrays and for loop

const names = ["anna", "susy","bob","Levi"];
const lastName = "shakespere";
let newArray = []; 

// for loop
    for(let i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);
    //newArray.push(names[i]);
    //newArray.push(`${names[i]} ${lastName}`);
    const fullName = `${names[i]} ${lastName}`;
    newArray.push(fullName)
}

console.log(names);
console.log(newArray); 









/* const names = ["Tiago","Claudino","Jack"];
const lastName = "Win";
const newArray = [];


for (let i = 0; i < names.length; i++) {
    console.log(i);
    const newName = `${names[i]} ${lastName}`;
    newArray.push(newName);
   
}

console.log(newArray); */










