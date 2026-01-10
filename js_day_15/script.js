// Timing Events :- "setTime()" , "setInterval()" , "clearTimeout()" 

// Operation in Objects :- [ "freeze" , "seal" , "destructuring" , "object methods" , "this keyword" ]

// PRACTICE Level-1

// Q - write a function sayHello that prints "Hello javaScript".

function sayHello(){
    console.log("Hello javascript");
}

sayHello();

// Q - Create a function add(a, b) that returns their sum and log the result.

function add(a, b){
    return a+b;
}

console.log(add(5,3));
// OR
let sum = add(2,4);
console.log(sum);

// Q - write a function with a default parameter name = "Guest" that prints "Hii <nmae>".

function prnt(name = "Guest"){
    console.log("Hii",name);
    // OR
    console.log(`Hii ${name}`);
}

prnt();

// Use rest parameter to make a function that adds unlimited numbers

function adds(...nums){
    // console.log(nums);
    let sum = 0;
    nums.forEach(function(val){
        console.log(val);
        sum = sum + val;
    })

    // we can also use for loop
    /*
    for(let i=0; i<nums.lenght; i++){
    sum = sum + nums[i];
    }
     */

    // OR we can use reduce() method
    /*
    let ans = nums.reudce(function(acc, val){
    return acc + val;
    }, 0);

    console.log(ans);
     */

    // console.log(sum);
    // OR
    return sum;
}

console.log(adds(1,3,4,5));

// Q - Create an IFEE that prints "I run instantly".

(function(){
    console.log("I run instantly");
})();

// Q - make a nested function where the inner one prints a variable from thre outer one

function outer(){
    let a = 12;
    function inner(){
        console.log(a);
    }
    inner();
}

outer();

// Q - create an array of 5 fruits. add one at the end and remove one from the begining

let fruits = ["apple", "guava", "grapes", "mango", "banana"]

fruits.push("pear");
fruits.unshift("orange");

// Q - Use a for loop to print all elements of an array
let arr = [1,2,4,6,7,3,45,7]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// Q - Create an object person with keys name, age, and city, and print each key's value

obj = {
    name: "vivek",
    age: 23,
    city: "patna",
};

for(let id in obj){
    console.log(obj[id]);
}

// Q - Use setTimeout() to log "Time's up!" after 2 seconds

setTimeout(function(){
    console.log("Time's up!");
}, 2000);

