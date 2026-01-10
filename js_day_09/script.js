// PRACTICE SESSION

// Q - print from 1 to 10

for(let i = 1; i<=10; i++){
    console.log(i);
}

// Q - print even numbers betwen 1 to 20

for(let i = 1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

for(let i = 2; i<=20; i+=2){
    console.log(i);
}

// Q - print numbers from 10 to 1

for(let i = 10; i>=1; i--){
    console.log(i);
}

// Q - print "yes" 5 times...repeat using a loop

for(let i = 100; i<105; i++){
    console.log("yes");
}

// Q  - print whether the number is even or odd from 1 to 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(`${i} - even`);
  else console.log(`${i} - odd`);
}

// Q - ask user for a number and check if it is negative or positive

//let num = prompt("number btao");
// promt se kuchh v mango wo hmesha string hi dega

// jab bhi prompt se number input karao to usse number m convert krna padega because promt hmesha string deta h

// WAYS To CONVERT NUMBER INPUT FROM PROMPT TO NUMBER TYPE

// parseInt
// Number
// +

// let num = prompt("number batao");
// num = parseInt(num);
// console.log(typeof num);

/*
let num = +prompt("number btao");
if(num>=0){
    console.log("positive");
}
else{
    console.log("negative");
} */

// Q - ask user for their age and check if he/she is eligible to vote or not

/*
let age = +prompt("age batao");
if(age>= 18){
    console.log("eligible to vote");
}
else{
    console.log("not elilgible to vote");
} */

let roll = prompt("enter roll no");
//console.log(roll.trim());  // if someone entered leading or trailing spaces and then entered the roll no then it will trim the spaces and print only roll no without unneccessary spaces
if(roll === null){
    console.error("you pressed cancel");
}
else{
    if(roll.trim() === ""){
        console.error("you pressed unnecessary spaces ")
    }
    else{
        roll =  Number(roll.trim());
        if(isNaN(roll)){
            console.error("please enter valid roll no");
        }
        else{
            console.log("your entered roll no is:-",roll);
        }
    }
}


// something.trim()  "trim()"  trim function is used to remove leading and trailing spaces , it will not remove the space between two letters or words
// Ex- "   harsh   "
// "harsh".trim() // output - "harsh"