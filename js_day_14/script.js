// pure function :-
// same input = same output
// koi side effect nhi hoga (function ke bahar ki value ko change na kre)

let a = 12;
function abcd(val){
    console.log(val+2);
}

abcd(a);

// impure function :- 
// same input = ifferent o/p ho sakta h
// koi n koi sideeffect ho skta h

function abcd1(val) {
//   console.log(Math.random() +val );
 a = Math.random() + val;
 console.log(a);
}

abcd1(a);
abcd1(a);
abcd1(a);


// Closure :- ek function jo return krta h ek function aur returning function parent function ka koi variable use krega

function abcd2(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

abcd2()();

// every closure is higher order function also



// ARRAYS
// ek se jyada members rakhne kijagah

let arr = [1,2,3,4,5,6];

// how to create an array
let arr1 = [];
let arr2 = new Array();

// Functions on Arrays :- ["push" , "pop" , "shift" , "unshift" , "indexof" , "array destructuring" , "filter" , "some" , "map" , "reduce" , "spread oparator" , "splice" , "slice" , "reverse" , "sort" , "join" , "toString" ]

// push() :- add an item to last index of array
arr.push(7,8);

// pop() :- remove an element from last index of array
arr.pop()

// shift() :- remove an element from the begining of an array
arr.shift();

// unshift() :- add a value at the start of an array
arr.unshift(0);

// indexof() :- tells the index of a specific element in the array
console.log(arr.indexOf(4));

// array destructuring :- allows us to take out value from array in separate variable
let [b, ,d] = arr;

// filter() :-
// filtering out some elements from the original array to the new array based on some condition
let score = [2,4,,6,78,43,12,34,16,8,];
let newScore = score.filter(function(val){
    return val>10;
});

// naye array me wohi elements jayega jo condition satisfy krega ya jo true return krega
// filter naya array bnata h.. existing array ko change nhi karta h

// spread operator :- (...) spread operator is used to spreas or expant all the value s of the array
// user in copying ,merging 
let sm = [4,65,8,3,8,3]
let sm2 = [...sm];



// Iterating over arrays usinf :- ["for loop" , "forEach" ]

// for loop
let ar = [1,2,12,8,5,6];

for(let i=0; i<6; i++){
    console.log(ar[i]);
}

// forEach
ar.forEach(function(val){
    console.log(val);
});

// OBJECTS IN JS
// objects are enclosed within {} containing key: value pair and each key: value pair is separated by ","
let obj = {
    name: "vivek",
    age: 23,
    email: "vivek123@gmail.com",
};

// we can also ceate object like this

let obj2 = new Object();

// accessing object values or properties
// accessed using key with dot "." operator (object.key)
// also accessed by bject["key"]
console.log(obj.name);
console.log(obj["name"]);

// removing any property or value from object
delete obj.age;


// Nestetd objects
let persn = {
    name: "anii",
    socials: {
        insta: "anii01",
        facebook: "aniiface01",
    },
};


