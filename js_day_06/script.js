// OPERATORS ASSIGNMENT

// q - 1
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Q - 2
let x = 5;
x = x + 3;
console.log(x);
x += 3;
console.log(x);

x -= 3;
console.log(x);

x /= 3;
console.log(x);

x *= 3;
console.log(x);

// Q - 3
let count = 5;
console.log(count);
count++;
console.log(count);

count--;
console.log(count);

// Q-4
let y = 10;
if(y>5 && y<20 && y===10)
{
    console.log("y is 10");
}
else{
    console.log("y is not 10")
}

//
console.log(c)
var c = 10;

// console.log(d)
// let d = 10;

test();
function test(){
    console.log("Hello");
}

hello();  // here it will give error due to variable hoisting and because of hoisting it will break in two parts as var hello and hello = function () .....and as var hello upar chla jayega so we are calling an undefined variable so it will give error
var hello = function (){
    console.log("hi")
}

// variable created with var are get hoisted and variable created with let and const and functions made with variable are not get fully hoisted