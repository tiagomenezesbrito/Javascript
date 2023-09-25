/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/


function calculateTotal(subTotal,tax) {
    return subTotal + tax;
}

console.log(calculateTotal(20,80));


const order1 = calculateTotal(100,20);
const order2 = calculateTotal(200,50);
const order3 = calculateTotal(300,100);

console.log(order1,order2,order3);

const total = function (subTotal,tax) {
    return subTotal + tax;
}

const Newtotal = total(50,5);
console.log(Newtotal);