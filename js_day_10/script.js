// PRACTICE SESSION

/*
let age = prompt("age btao");

if(age === null){
    console.error("you pressed cancel button");
} else{
    if(age.trim() === ""){
        console.error("please enter something");
    } else{
        age = Number(age);
        if(isNaN(age)){
            console.error("please enter a number");
        } else{
            if(age<0) console.error("entered age is invalid");
        else{
            console.log("you entered your age:-",age);
            if(age >= 18){
                console.log("eligible to vote");
            } else{
                console.log("not eligible to vote");
            }
}
        }
    }
} */

// optimised one

    let age = prompt("Enter your age:");

if (age === null) {
  console.error("You pressed the cancel button.");
} else if (!age.trim()) {
  console.error("Please enter something.");
} else if (isNaN(age)) {
  console.error("Please enter a valid number.");
} else {
  age = Number(age);
  if (age < 0) {
    console.error("Entered age is invalid.");
  } else {
    console.log(`You entered your age: ${age}`);
    console.log(age >= 18 ? "Eligible to vote." : "Not eligible to vote.");
  }
}


// Q - print a table of 5
for(let i = 1; i<10; i++){
    console.log(`5 X ${i} = ${5*i}`);
}


// Q - print how manny numbers between 1 to 15 are greater than 8
let count = 0;
for(let i = 1; i<=15; i++){
    if(i>8){
        count++;
        console.log(i);
    }
}
console.log(`total count is: ${count}`);


// Q - ask user for password and print acess status

/*
let password = "vivek@123"
pass = prompt("password btao");

if(pass === null){
    console.error("you cancelled it");
} 
else if(pass.trim() === password){
    console.log("matched");
} else{
    console.log("not matched");
} */



// Level-2 (slightly tougher)

// Q -1
// Allow only 3 attempts to enter correct password, if user gets it early, stop. 


// while loop
// while tab tak chalao jab tak condition true h

// for - start end change
// for(start; end; change){}

/* syntax of while loop

start
while(end){
your code
chang
} */
  
/*
let i = 1;
while(i<=10){
    console.log("Hello");
    i++;
}

let nm = prompt("enter your name");

 while(nm !== "vivek"){
   console.log(nm);
    nm = prompt("enter your name");
 } */


 let attempt = 0;
 pass = "vivek@123";
 let khulgya = false;
 let password  = prompt("enter your password");
 attempt++;

 if(password === pass){
    // console.log("successfully loggedIn");
    khulgya = true;
 } 

 while(password !== pass){
    if(attempt ===  3){
        console.error("Account Locked");
        break;
    }
    password = prompt("enter your password");
    if (password === pass) {
    //   
    khulgya = true;
    } 
    attempt++;
 }

 if(khulgya === true) console.log("successfully loggedin")


    