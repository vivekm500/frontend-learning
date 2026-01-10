// DOM - Document Object Model (frontend ki js)

// DOM -> 4 Pillars
// 1. selection of an element 
// - querySelector()
// - getElementById()
// - querySelectByClassName()
// - querySelectorAll

// 2. changing HTML
// - innerHTML
// - textContent
// _ innerText

// 3. changing CSS
// 4. Event listeners

// 1. selection of an element
// think of html as a document


var h1 = document.querySelector('h1')

console.log(h1);
// id - #idName
// classv - .className
// tag - tagName

// 2. changing HTML
h1.innerHTML = "changed";

// 3. changing CSS
// htmlElement.style.cssPropertyName = "cssProperty"
h1.style.color = "red"
h1.style.backgroundColor = 'white';


var box = document.querySelector("#box");

box.innerHTML = "hey hey";

box.style.backgroundColor = "royalblue"

// 4. Event listeners
// Used to track the activity of user (like clicking any key , draging from mouse)

h1.addEventListener('dblclick', function(){
    console.log("Welcome");
})

// dblclick - double click
/* syntax
htmlElement.addEventListener('event', function(){})
 */

var h2 = document.querySelector('h2');
var btn = document.querySelector('button')

btn.addEventListener("click", function(){
    h2.innerHTML = "it's vivek here";
    h2.style.color = 'gold';
    h2.style.fontSize = '60px'
    h2.style.backgroundColor = 'red';
})


// other more methods of selection of an element

// document.getElementById('id name') :-
// let  hero = document.querySelector('#hero')

let h1id = document.getElementById('hero'); // selecting element by id

h1id.innerHTML = 'welcome'

// document.getElementsByClassName('className') :-
let h1Class = document.getElementsByClassName('elem') // selectin element by className,  it gives us a collection because class can be same for many it's not unique, its reearely used

// document.querySelectorAll('') :- select all that tag whwerever used
let h3 = document.querySelectorAll('h3');

h3.innerHTML = "vivek" // querySelectorAll() → returns NodeList
// NodeList does not have .innerHTML → so it won’t update the page.

// h3.forEach((item) => {
//   item.innerHTML = "vivek";
// });

// OR
for (let i = 0; i < h3.length; i++) {
  h3[i].innerHTML = "vivek";
}


// other more methos of changing HTML
 
// .textContent :- changes only text..treat everything like text


// h1.innerHTML = '<i style="color:red">thankyou</i>'; // .innerHTML :- applies all changes ...all html property

  h1.textContent = '<i>TEXT</i>'; 

