// DESTRUCTURING

let arr = [10, 20, 30, 40]

let arr2 =arr;

arr2.push(99) // changes will reflect in both the arrays


let arr3 = [...arr]   // BEST METHOD TO COPY ONE ARRAY IN ANOTHER ARRAY

let arr4 = [arr[0], arr[1]];

let a = arr[0];
let b = arr[1];

let c = [...arr];

console.log(c)

//
let [x,y,z] = arr

console.log(x)

//
let arr5 = ['anii', 'binit', 'chandu', 'divya', 'elli']

let arr6 = [...arr5]
//      OR
let [...arr7] = arr5

arr6.push('harsh')

console.log(arr6)
console.log(arr5)
console.log(arr7)

let[r,s,...arr8] = arr5
console.log(r)
console.log(arr8)

//let [u,v,...arr9,m] = arr5 ❌
// rest operator hmesha last me likha jata h


// destructuring with objects

let obj = {
    user: "vivek",
    age: 21,
    city: "patna"
}

let obj2 = obj; // CHANGES will reflect in botyh the objects

obj2.city = "bangalore"

console.log(obj)
console.log(obj2)

let obj3 = {...obj} //  BEST METHOD TO COPY ONE OBJECT IN ANOTHER ONE
// Now changing one will not reflect in another
obj3.city = "bhopal"

console.log(obj2)
console.log(obj3)

//      OR
let {...obj4} = obj

console.log(obj4)


// let {user,age} = obj // only user and age from obj will be copied
//console.log(user)

// let {usera} = obj  ❌
// attribute name should be same as from which object it is being copied

let {user,...obj5} = obj
// user from obj will be copied in user1 and rest will be copied in obj5 and obj5 itself will be an object

console.log(obj5)

let obj6 = {
    name: "telth",
    city: 'bhopal',
    skills: ['js', 'react', 'next']
}

let {skills} = obj6 // here we hyave done object destructuring

console.log(skills)

let [first, ...restSkills] = skills // here we have done array destructuring

console.log(first)
console.log(restSkills)



// 2 tarah ki js hoti h
// normal js -> Normal JavaScript refers to JavaScript executed as a classic script (without type="module"), where code runs in the global scope, is not modular by default, and depends on script order for sharing variables and functions

// module js -> Module JavaScript refers to JavaScript executed as an ES module (type="module"), where each file has its own scope, runs in strict mode by default, and shares code explicitly using import and export.

// Normal JS is global and unstructured; Module JS is scoped, strict, and explicitly connected.

// normal js - ek hi jgh p sbkuchh h

//  module - 