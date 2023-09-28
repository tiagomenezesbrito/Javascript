
//students
console.log(students);

/* Map challenge 
1. add role:"student" property to each object
using map method
2. assign to "updatedStudents" variable and log
*/

//access to each item of the array
/*      const updatedStudents = students.map(function(student){
        //console.log(student);
        //Adding new property to object
        student.role = "Student";
        student.class = "A";
        return student;

    })

    console.log(students);
    console.log(updatedStudents);
    console.log(updatedStudents[0]); 
    

*/


/*  
Filter challenge
filter array and return only scores >= 80
assign to "HighScores"
 */

/* 
 
    const HighScores = students.filter(function(student){
        //return student.score >= 80; //My aproach

        if(student.score >= 80){
            return student;
        }

    })
    console.log(HighScores);


    const loWScores = students.filter(function(student){
        if (student.score <60){
            return student;
        }


    })
    console.log(loWScores);

    
    const recu = loWScores.map(function(student){
        student.status = "Recuperação"
        return student;
    })
    console.log(recu); 
 */



/* 
find challenge

find especific id in array
asssign to "specifiecId variable and log"
*/
/* 
    const specificId = students.find(function(student){
        return student.id === 5;
    })

    console.log(specificId);


    //Experimenting
    const animals = ["pig","lion","chicken","Bear","Chicken","chicken"];
    
    //Finding chicken using the method find
    const friedChicken = animals.find(function(animal){
        return animal === "chicken";
    }) 

    //Function to find chickens
    function findChicken(animal){
        if (animal === "chicken"||animal === "Chicken"){
            return animal;
        }
    }
    //
    const friedChicken = animals.filter(function(animal){
        return animal === "chicken";
    }) 

    const friedChicken = animals.filter(findChicken);//You cant call the function, the method will do it for you

    console.log(friedChicken); 
*/