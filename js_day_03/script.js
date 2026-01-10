// add coments

// Data types :- Data ka type hi h datatypes

// vivek - String
// 12 - Number
// true/false - boolean
// [] - array
// {} - Object
// 12.8 - float

// floa - 12.3
// 32.6%

// number - 12 (integer v kehte h)
// 2000

// string - h
// aur bhai kaise ho
// badhiya
// v
// vivek85$@

// boolean - false true

// null - jab aapke pass koi value na ho dene k liye tab null use hota h
// let character = null;
// let data = null;
// let user = null;

// array - ek se jyada value hold krne k liye
// [1,2,6,8]
// ["harsh", "vivek", "anjani"]
// array in js can take mixed values
// ["vivek",1,2,true,{},[],class Animal{}]

// object - ek se jyada properties ek bnde ki hold krne k liye
// array ek se jaada bando k liye hota h
// object ek bande ki kai saari chizo k liye hota h
["harsh", "shyam", "ravi", "ankur"]

{
    name: "vivek";
    age: 21;
    email: "vivek@email.com";
}

// symbol - we will learn when we will see objects in detail

// undefined - jab koi variable bnaya but usse koi value nhi di
var a;
let b;

// NaN - (not a number) koi number k sath aisa operation kiya jo ho nhi skta to NaN milta h
12*"vivek" //o/p - NaN
// Infinity - 



// RELATIVE(reference) and PRIMITIVE datatypes in JS

// REFERENCE - array , objects , function
// koi v value jisme bracket lga ho wo relative value hoti h
// relative vale ko directly copy nhi kr sakte...uska ek reference jata h...means copied value m kuchh change krne pr original v change hoga

var a = [1,2,3,4];
var c = a; // c m a ka copy nhi gya h ...c m a ka reference gya h

c.pop(); // now c = [1,2,3] and also a = [1,2,3]

//PRMITIVES - Number , booleans , strings , null , NaN , undefined , Infinity, Symbol, BigInt
// primitves - jinki value direct copy kr sakte h
