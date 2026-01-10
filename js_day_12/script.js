// PRRACTICE SESSION - (level-2 ques continued)

// ATM  simulator - allow 3 withdrawals, start with 1000 balance. ask withdrwal amount 3 times. If enough balance "deduct" Else print "insufficient balance".

let bal = 1000;
let counter = 0
/* let amt = +prompt("enter withdrawal amount") ;
counter++;
if(amt === 0) {
        console.error("Invalid transaction");
        break;
    }
if(amt <= bal){
    bal -= amt;
    console.log(`Withdrawal successful. Remaining balance = ${bal}`);
} 
else{
    console.error(`Insufficient balance: avl bal: ${bal}`);
}

while(bal > amt && counter !== 3){
    amt = +prompt("enter withdrawal amount");
    counter++
    if(amt === 0) {
        console.error("Invalid transaction");
        break;
    }
    if (amt <= bal) {
      bal -= amt;
      console.log(`Withdrawal successful. Remaining balance = ${bal}`);
    } 
    else{
        console.error(`Insufficient balance: avl bal: ${bal}`);
        
    }
}

if(counter === 3)
{
    console.error("only 3 withdrawal is allowed");
} */
   
// other way to do this

/*
while(counter<3){
    let amt = +prompt("enter amount");
    counter++
    if(amt === 0) {
        console.error("Invalid transaction");
        break;
    }
    if(amt <= bal){
        bal -= amt;
        console.log(`Withdrawal successful. Remaining balance = ${bal}`);
    }
    else{
        console.error("Insufficient amount");
        console.log(`Avl Balance: ${bal}`);
        break;
    }
}

if (counter === 3) {
  console.error("only 3 withdrawal is allowed");
} */


  // do while loop
/* syntax
do
{
// code // ek baar pehle ye do ka code execute hoga uske baad while ki codition check and it will repeat acoording to the condition...even if while ki condition glt ho to v do ek baar jrur chlega ...
}while(condition)
*/

let i = 1;
do{
    console.log(i);
    i++;
}while(i<10)


    // Recursion in js
    // function calling function(itself)

    function abcd(n){
        if(n === 0) return;
        console.log(n);
        abcd(n-1); // function calling itself
    }

    abcd(5);

    // break; and continue;

    for(let i = 1; i<=10; i++){
        console.log(i);
        if(i === 5) break;
    }

     for (let i = 1; i <= 10; i++) {
        
       if (i === 5) continue;
        console.log(i);
     }
     



// FUNCTIONS IN JS
// functions -> aapka code jo turant nhi chlega, tab chalega jab aap bologe ki chalo
// aap uss code ko kitni bhi baar chla sakte ho

function doSomething(){
//    console.log(name, age, email);
      console.log(arguments[2])  //using argument object, with the keyword "arguments[]" we can acess passed arguments to the function even without recieving it in our function through parameter
}

doSomething("vivek", 21, "vivek123@gmail.com");

