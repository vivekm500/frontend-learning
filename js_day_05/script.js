// OPERATORS IN JS

// 1. Arithemetic Operators

// + - * / % **

12 + 13 // o/p- 25
12 - 13 // o/p- -1
12 * 13 // o/p- 156
12 / 13 // o/p- 0.923...
12 % 13 // o/p- 12 (modulus operator returns remainder)
2 ** 3  // o/p- 8  (exponentiation do powers)

// 2. Assignment Operetors
// = += -= *= /= %=

// equal = value dene m ya assign krne m kaam aata h
let a = 12;

// += value ko particular se badhana
a += 13; // now a = 25

// -= value ko particular se ghatana
a -= 13 //  now a = 12

// *=  particular value se multiply krke save krna
a *= 2 // now a = 24

// /= particular value se divide krke save krna
a /= 2 // now a = 12

// %= 
a %= 3 // now a = 0


// 3. Camparison Operator
// = == != !== < > <= >=

// == not strict camparison NEVER USE THIS
// === strict camparison ALWAYS USE THIS

// != NEVER USE THIS
// !== ALWAYS USE THIS

// < less than
// > greater than
// <= less than equal to
// >= greater than equal to


// Logical Operator
// && || !

// && (and operator)
// true && true = true (only true when both are true)
// if any false then result is false
// ex - username === exist && password === userpassword

// || (or operator)
// if any one is true then result is true
// false if all conditions are false
// true || true = true
// true || false = true
// false || true = true
// false || false =  false

// if(age >= 18 || govt_certificate)
// {
//     eligible
// }

// ! (not operator)
// makes true false and false to true...reverse the truthyness


// 5. Ternary Operator
// condition ? do this: do that

12 > 13 ? console.log("true") : console.log("false");


// 6. Type Checking Operator

// typeof
// checks the type of data
// typeof 12 // o/p - 'number'

// instanceof 
// kuchch v bnaoge wo top p likhi gyi chizo se aati h
// The instanceof operator checks whether an object is an instance of a specific constructor or class — i.e., it tests if the object’s prototype chain includes the constructor’s prototype.
// basically it check of which class is a part of
// syntax - object instanceof Constructor

// let arr = [1, 2, 3];
// console.log(arr instanceof Array);     // true ✅
// console.log(arr instanceof Object);    // true ✅ (because Array inherits from Object)
// console.log(arr instanceof String);    // false ❌


// 7. String Operator

// + (fon concatenation)
// "vivek" + "kumar" //o/p - vivekkumar

// 8. Spread / Rest Operator

// spread ...
let arr = [1,2,3,4,5];
let arr2  = [...arr];  // used to copy array values

// rest ...
function abcd(a,b,c,...rest)
{

}

abcd(1,2,3,4,5,6,7,8,9);


// 9. Nullish Coalescing Operator
// ?? (fallbak only when null / undefined)
// ex -   user ?? console.log("user doesn't exist") //agr user exist nhi krta hoga to user null m chla jayega and it will fallback on other and print user doesn't exist


// 10.  Optional Chaining
// ?. (safe access to nested values)
let obj =  {};

// obj.name.first  // gives error as it when checks for name object and then first object in it because those doesn't exist

obj?.name?.first // it wont give error as it checks if it exist then ok


//  VARIABLE HOISTING IN JS
// hoisting ka matlab h ki variable ko bnane se pehle bhi use kiya ja sakta h
// hoisting me aapka variable toot jata h do hisso m
console.log(c);
var c = 12;
// it break in two parts as
var b;
b = 12;

// declaration top of the file jata h
// initialization wohi rahta h jaha variable tha
// ab aapka variable error nhi detakyunki use hone se pehle wo exist kr rha tha

// hoisting let k sath work nhin karti h
// console.log(d) // gives error
// let d = 12;
   

// Temporal dead zone (tdz)
// program m jaha v variable create ki hyi usse upar ka  hisse ko tdz kehte h r hm uss hisse m uss varible ko use nnhi kr sakte
let h = 23; // line 1 to 153 variable h ka tdz h



