// Creating an element

// document.createElement('elementName') :- it is used to create a new html element with the help of js
let h1 = document.createElement('h1');

console.log(h1);

let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let h =document.createElement('h1')
   
    h.innerHTML = "hello from js";

    console.log(h);
})


// append a child

// parentElement.appendChild(child) :- it is used to append a child element to its parent Element

let h2 = document.createElement('h2');

h2.innerHTML = 'i am created from js'

let main = document.querySelector('main');

main.appendChild(h2);

h2.style.color = 'red';

// project practice :- random page generator

let bttn = document.querySelector('#bttn')

let m1 = document.querySelector('#m1')

bttn.addEventListener('click', function(){

    let div = document.createElement('div');

    let x = Math.random()*90
    let y = Math.random() * 90;
    let r = Math.random() * 360;

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    div.style.height = '50px'
    div.style.width = "50px";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    div.style.left = x+'%'
    div.style.top = 12+y+'%'
    div.style.rotate = r+'deg'
    

    m1.appendChild(div)

    
})


// project practice :- random page generator

let bttn2 = document.querySelector("#bttn2");

let m2 = document.querySelector("#m2");

let arr = ['i am vivek', 'my age is 23', 'i love to cook', 'js is my love', 'anii is best', 'keep moving']

bttn2.addEventListener("click", function () {
  let h1 = document.createElement('h1');

  let a = Math.floor(Math.random()*arr.length);

  let x = Math.random()*70;
  let y = Math.random()*80;
  let rot = Math.floor(Math.random()*360)
  let scl = Math.random()*3

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

   h1.innerHTML = arr[a];

   h1.style.fontSize = '20px'
   h1.style.position = 'absolute'
   h1.style.top = 127+x+'%'
   h1.style.left = y+'%'
   h1.style.rotate = rot+'deg'
   h1.style.scale = scl
   h1.style.color = `rgb(${c1},${c2},${c3})`


  m2.appendChild(h1);
});