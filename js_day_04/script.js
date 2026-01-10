console.log("connected");
var a = "vivek";
let b = "harsh";
const c = "love";

a  = "updated";
b = "updated";
// c = "updated"; // const can't update it

{
    let d = 12;
}
// console.log(d); // let respect the block so it will not print

// we use const where we need to fix the vale ...we don't want it to be changes throughout the program

// discount
// days in year
// mins in hour

console.log("patna");
console.info("patna");
console.warn("patna");
console.error("patna");


// let nm = prompt("name ?");
// alert(`hey ${nm}`);

// let username = prompt("username btao");
// console.log(typeof username);

// prompt se jo v loge wo ek string banb jayega

// let age = prompt("age btao");
// console.log(typeof age);

let msg = "i love sheryians.";
msg.slice(2,6); // o/p - 'love'

msg.split('');  // o/p - ['i', ' ', 'l', 'o', 'v', 'e', ' ', 's', 'h', 'e', 'r', 'y', 'i', 'a', 'n', 's', '.'] // total 17 words

msg.replace("love", "study at"); // o/p - i study at sheryians

msg.includes("love"); // o/p - true 
 // "love" is  replaced with "study at" but still love is included in msg because strings are immutable in js 

/*🧾 What’s Happening Step-by-Step
let msg = "i love sheryians."
msg now holds "i love sheryians.".
msg.replace("love", "study at")
This creates a new string: "i study at sheryians.".
But you didn’t store or use that new string.
So msg is still "i love sheryians.".
msg.includes("love")
Checks if "love" is still in the original msg → ✅ true. */

let naam = "harsh";
console.log(`hey ${naam} welcome to js!`); 

let y = (5+10)*2;
console.log(y);

let skills = ["js", "html"];
console.log(typeof skills); // o/p - object
// js m array ka type object hota h

let x = null;
console.log(typeof x); // o/p - object

let h;
console.log(typeof h); // o/p - undefined

let z = Symbol("id");
console.log(typeof z); // o/p - symbol

12+ "vivek" // o/p - 12vivek 
// in js when something is added to string then it makes the other string too and include to themselves

// SPECIAL VALUES
1/0; // 0/p - Infinity
0/0;  // o/p - NaN

Number("abc");  // o/p - NaN

undefined+1;  // o/p - NaN

// PRIMITIVE VS REFERENCE
let r = 5;
let s = r;
s = 10;
console.log(r,s) // o/p - 5 10

let obj1 = {naam: "harsh"};
let obj2 = obj1;
obj2.naam = "sheryians";
console.log(obj1.naam); // o/p - sheryians

