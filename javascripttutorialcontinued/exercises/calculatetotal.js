// Functions, return, if, arrays, for loop

/* const gas = [20,30,100];
const food = [10,30,50];


function calculateTotal(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(`The total money you spent on this item is: ${total}$`);
}

calculateTotal(gas);
 */















const gas = [50,10,25];
const food = [500,100,250];
const cinema = [50,100,25];

function calculateTotal(arr) {

    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];

    }
    if (total <100) {
        console.log("WoW, you are good, your total is less than 100");
        return total;    
    }   else {
        console.log("Wow, you are bad, your total is more than 100!!!")
    }

    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const cinemaTotal = calculateTotal(cinema);


console.log({
    gas:gasTotal,
    food:foodTotal,
    cinema:cinemaTotal,
});
