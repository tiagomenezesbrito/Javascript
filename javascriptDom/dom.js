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


/* const first = document.querySelector(".first");
console.log(first);
const second = first.nextSibling.nextSibling.style.color = "red";
console.log(second);

const last = document.querySelector(".last");
const beforeLast = last.previousSibling.previousSibling.style.color = "blue"; */





//nodeValue
//textContent

/* const item = document.getElementById("special");
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue); */

// getAttribute();
// setAttribute();

/* const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links); */



// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location');

/* const result = document.querySelector('#result');
const first = document.querySelector('.red');
// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);
// result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

console.log(result.children);
 */



/* // prepend
// innerText

const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`;
document.body.prepend(heading);
*/



// innerHTML
// textContent

/* const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
document.body.appendChild(ul);

div.textContent = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
 */



// select element
// addEventListener()
// what event, what to do

/* const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function() {
  heading.classList.add('red');
});
 */


/* 
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColors); */


// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

/* const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  console.log('you clicked me');
});
btn.addEventListener('mousedown', function() {
  console.log('down');
});
btn.addEventListener('mouseup', function() {
  console.log('up');
});

heading.addEventListener('mouseenter', function() {
  heading.classList.add('blue');
});
heading.addEventListener('mouseleave', function() {
  heading.classList.remove('blue');
});
 */