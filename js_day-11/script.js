// PRACTICE SESSION -(level-2 ques)

// Q - allow only 3 attempt to enter correct password , if user gets it early, stop if not -> Account locked

// let attempt = 0;
// let sahipassword = "anii"
// let userpassword = prompt("password btao");
// attempt++;
// if(userpassword === sahipassword){
//     console.log("LoggedIN");
// }

/*
while(sahipassword !== userpassword){
    
    if(attempt === 3){
        console.error("account Blocked");
        break;
    } 

userpassword = prompt("password btao");
attempt++;
if (userpassword === sahipassword) {
  console.log("LoggedIN");
}
} */

// other ways to do this

/*
while(attempt < 3 && userpassword !== sahipassword){
    userpassword = prompt("password btao");
    attempt++;
}

if(attempt <= 3 && userpassword === sahipassword){
    console.log("LOGGEDIN")
}
else{
        console.error("Account locked");
    } */



// Q - ask user for words until they type "stop" and count how many times user has typed "yes"

/*
let words = prompt("type words");
let count = 0;

while(words !== "stop"){
    words = prompt("type words")
    if(words === "yes"){
        count++;
    }
}

console.log(`you typed yes ${count} times`); */


// Q- print numbers from 1 to 50 divisible by 7

for(let i = 1; i<=50; i++){
    if(i%7 === 0){
        console.log(i);
    }
}

// Q - print sum of all odd numbers from 1 to 30

let sum = 0;
for(let i = 1; i<=30; i++){
    if(i%2 !== 0){
        sum = sum+i
    }
}

console.log(sum);


// Q  - keep asking user until user enters an even number
let num = +prompt("number btao");

while(num%2 !== 0){
    num = +prompt("number btao");
}


// Q - print numbers between two user input, input start and end using prompt() -> print all between

let start = +prompt("start number btao");
let end  = +prompt("end number btao");

if(start > end || start === end) console.error("start can't be greater than end or equal")

for(let i = start+1; i<end; i++){
    console.log(i);
}


// Q - print only first 3 odd numbers from 1 to 20, use loop. stop with break after 3 odd prints

let oddcount = 0;
for(let i = 1; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
        oddcount++;
    }
    if(oddcount === 3) break;
}

// Q  - ask user 5 numbers and count how many are positive. use loop + condition + counter

let num1 = +prompt("enter your number");
let poscount = 0;
if(num1 > 0) poscount++

for(let i = 1; i<5; i++){
num1 = +prompt("enter your number");
if(num1 > 0) poscount++
}

console.log(`total positive numbers entered by you is: ${poscount}`);
