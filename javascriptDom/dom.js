/* Dom 
//Similar to CSS

//Select the element or group of elements that yoou want to affect
// Decide the effect we want to apply to the selection

//Many different ways

//assign to a variable

    const element = document.getElementById("element");
    //do something
    document.querySelector("element"); //do something

    document.body.style.backgroundColor = "green";
    document.body.style.color = "Yellow";
    document.getElementById("element");

//Window object
console.log(window);

// returns a node object or a node list, which is an arraylike object
 */




/* 
window object = browser api
//document
//console.dir see all the propertys of a node

*/




/* 
getElementById("element")
getElementsByTagName(tagname);
//HTMLcollection = array-like object
//index, lenght property but not array methods (forEach)

//querySelectorAll() in most cases
//nodelist - objects are collections of nodes
//can run for each
//turn them into array - spread operator [...]
//after that can use any array property

select the element or group of elements that we want
Decide the effect we want to apply to the selection
*/

const h1 = document.getElementById("title");
h1.style.backgroundColor = "grey";
h1.style.color = "blue";

const btn = document.getElementById("btn");
 btn.style.backgroundColor = "grey"; 

/* document.getElementById("btn").style.backgroundColor = "green";
document.getElementById("btn").style.color = "black" */

const mainp = document.getElementById("mainp");
mainp.style.backgroundColor = "yellow";


const list = document.getElementsByTagName(li)