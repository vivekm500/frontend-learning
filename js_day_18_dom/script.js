// Revision

let h1 = document.querySelector("h1");

h1.innerHTML = "Let's Go!!!";

h1.style.color = "red";

h1.style.backgroundColor = "royalblue";

h1.addEventListener("click", function () {
  h1.style.color = "gold";
  h1.style.backgroundColor = "red";
});

// Actual Class start

// Math.random() :- generates random numbers and it's range is between 0 to 1

let a = Math.random() * 100; // now range becomes 0-100

// Math.floor() :- converts a decimal value to floor(whole) value
let b = Math.floor(a);

// console.log(a);
console.log(b);

// we can do it all in one line
let c = Math.floor(Math.random() * 100);

console.log(c);

// PROJECT :- changing color box

let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  box.innerHTML = `rgb(${c1},${c2},${c3})`;

  
});

//

let arr = ["anii", "vivek", "rahul", "rishav", "jite4ndra", "pradeep", "kiran"];

let d = Math.floor(Math.random() * arr.length);

console.log(arr[d]);

// PROJECT:- ipl team color display

let ar = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
];

let m = Math.floor(Math.random()*ar.length)

console.log(ar[m]); // har baar nya object milega

let h2= document.querySelector('h2');

let main = document.querySelector('main')

let btn2 = document.querySelector('.btn2')


btn2.addEventListener('click', function(){
    let winner = ar[Math.floor(Math.random() * ar.length)];

    h2.innerHTML = winner.team;

    h2.style.backgroundColor = winner.secondary

    main.style.backgroundColor = winner.primary;
})