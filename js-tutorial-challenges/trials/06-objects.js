/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/


const car = {

    model : "Ford",
    year : 2023,
    colors : ["Blue","White","Black"],
    hybrid : true,
    drive: function() {
        console.log("Driving")
    },
    /* You can use both ways to create methods */
    stop() {
        console.log("Stoping the car");
    }

}

console.log(car.colors[0]);
car.drive();
car.stop();



const tv = {
    width: 300,
    height: 150,
    led:true,
    openchanels: true,
    price : 1500
    
}

console.log(tv.height,tv.width,tv.price)