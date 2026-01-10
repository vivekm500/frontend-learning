// PRACTICE level-2

// Q - write a higher order function runTwice(fn) that takes another function and executes it two times

 function runTwice(fn){
    fn();
    fn();
 }

 runTwice(function(){
    console.log("Hello")
 });

// Q - Create one pure function that always returns the same ooutput for given input, and one impure function using a global variable;

function Pure(a, b){
    console.log(a+b)
}

Pure(2,3);
Pure(2,3);

let global = 0;
function imPure(a){
    global++;
    console.log(a + global);
}

imPure(2);
imPure(2);

// Q - write a function that uses object destructuring inside parameter to extract and print name and age

function abcd({nmae, age}){ // we extracted nmae and age using object destructuuring in separate variable nmae and age
    console.log(nmae, age);
}

abcd({nmae: "vivek", age: 22})

let obj = {
    roll: 34,
    class: "tenth"
}

function print(obj1){

    console.log(obj1.roll);
    console.log(obj1.class);
}

print(obj);

// Q - Demonstrate the difference batween normal function and arrow function when used as object methods (this issue)

// "this" keyword
// this ek aisa akeyword hai jo dynamic h, iski value badal jati h baar-baar

console.log(this); // here value of "this" is window

function abcd1(){
    console.log(this); // here also value of "this" is window
}

abcd1();

let objct = {
    name: "anii",
    fnc: function(){
        console.log(this); // agr object ke andar ek function ho usme "this" use hua ho to woha uska matlab hota h aapka khud ka object

       let fnc3 =() => {
            console.log(this); // ye arrow function this  ki value apne parent se borrow krrega jaha ki this ki value object h
        }
        fnc3();
    },
    fnc2: () => {
        console.log(this); // arrow function apne parent se value leta h, iska parent ek object objct j jo ki global space me h aur global me this ki value window thi to yaha v this ki value window hogi
    },
}

objct.fnc();
objct.fnc2();


// Q - Given an array of numbers, use map() to create a new array where each nunber is squared

let num = [2,3,1,5,6,7]
let sqnum = num.map(function(val){
    return val*val;
});

console.log(sqnum);

// Q - use filter() to get only even numbers from an array
let arr = [1,2,3,4,5,6,7,8,9];
let newarr = arr.filter(function(val){
    return val%2 === 0;
});

console.log(newarr);

// Q - Use reduce() to find the total salary from an array of numbers [1000, 2000,3000];

let salary = [1000, 2000, 3000];
let totalSalary = salary.reduce(function(acc, val){
    return acc+val;
}, 0)

console.log(totalSalary);

// Q - create an array of names and use some() and every() to test a condition(e.g- all names loner than 3 chars)

let names = ["anii", "pranit", "harsh", "vivek", "raj"];

let name1 = names.some(function(val){
    return val.length > 3;
});

let name2 = names.every(function(val){
    return val.length > 3;
});


// Q - Craete an object user and test the behaviour of object. freeze() and Object.seal() by adding/changing keys.

let user = {
    name: "vivek",
    age: 21,
    email: "viv@.mail"
};

Object.freeze(user); // Object.freeze(ObjectName) :- this will freeze the object and we will not be able to make any changes in its property or value aur naa hi koi key value pair add kar sakte
user.social = "insta" // ❌
user.age = 34; // can't be changed as it is freezed

Object.seal(user); // Object.seal(ObjectName) :- object me already existing properties ko change kar sakte h but koi nyi key: value pair add nhi kar sakte

user.age = 45; // ✅
user.social = "insta"; // ❌


// Q - Create a nested aobject (user -> address -> city) and access the city name inside it

let objt = {
    user: {
        nmae: "anii",
        address: {
            city: "patna",
        },
    },
};

console.log(objt.user.address.city);

let {city} = objt.user.address;



