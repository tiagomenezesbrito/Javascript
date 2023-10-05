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
getElementsByTagName("tagname"); -> HTMLcollection
getElementByClassName("ClassName") -> HTMLcollection
//HTMLcollection = array-like object
//index, lenght property but not array methods (forEach)


//querySelector("any css") -> selects single
//querySelectorAll("any css")-> select all // in most cases
//nodelist - objects are collections of nodes
//can run for forEach
//turn them into array - spread operator [...]
//after that can use any array property

select the element or group of elements that we want
Decide the effect we want to apply to the selection
*/

/* 

    const h1 = document.getElementById("title");
    h1.style.backgroundColor = "green";
    h1.style.color = "yellow";


    const btn = document.getElementById("btn");
    btn.style.backgroundColor = "grey"; 

    //document.getElementById("btn").style.backgroundColor = "green";
    //document.getElementById("btn").style.color = "black" 

    const mainp = document.getElementById("mainp");
    mainp.style.backgroundColor = "yellow";


    const list = document.getElementsByTagName("li");
    console.log(list);
    list[0].style.backgroundColor = "red";
    list[1].style.backgroundColor = "blue";
    list[2].style.backgroundColor = "blue";
    list[3].style.backgroundColor = "red";
    console.log(list.length);

    const betterList = [...list];
    betterList.forEach(function(item){
        item.style.background = "green";
    })

    console.log(betterList);


    const orange = document.getElementsByClassName("special");

    orange[0].style.backgroundColor = "orange"; 

*/


/* 
const result = document.querySelector("#result");
result.style.backgroundColor = "gray";

const item = document.querySelector(".special");
item.style.backgroundColor = "orange";

const betterItem = document.querySelectorAll(".special");
console.log(betterItem);
//betterItem.style.backgroundColor = "green";

const h1 = document.querySelector("h1");
console.log(h1);
h1.style.color = "red";

const title = document.querySelector("#title");
console.log(title);
title.style.backgroundColor = "green";
 */







/* 
Navigate the Dom

//children
    const result = document.querySelector("#result");

    const children = result.children;
    console.log(children);
    children[1].style.backgroundColor = "red";
    children[3].style.backgroundColor = "red";


//parentElement
    
    const heading = document.querySelector("h2");
    console.log(heading.parentElement.parentElement)
    console.log(heading.parentElement)

    const parent = heading.parentElement;
    parent.style.color = "blue";
    parent.style.backgroundColor = "green";


*/






// previousSibling
// nextSibling
// return whitespace
/* 

 */


const first = document.querySelector(".first");
console.log(first);
const second = first.nextSibling.nextSibling.style.color = "red";
console.log(second);

const last = document.querySelector(".last");
const beforeLast = last.previousSibling.previousSibling.style.color = "blue";