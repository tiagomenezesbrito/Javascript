
//students
console.log(students);

/* Map challenge 
1. add role:"student" property to each object
using map method
2. assign to "updatedStudents" variable and log
*/

//access to each item of the array
const updatedStudents = students.map(function(student){
    //console.log(student);
    //Adding new property to object
    student.role = "Student";


})


const array1 = ["tiago","Lucas","Claudino"];

/* function addArray(arr){
    arr.push("Paulo");
} */


function testArray(arr){
    

}

testArray(array1);

const newarray = array1.map(function(String){
    console.log(`${String} ${"Paulo"}`);
});

console.log(newarray);
