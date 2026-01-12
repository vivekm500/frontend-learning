// Introduction to Error Handling

// errors ko shi tarike sew handle krna

// Common types of errors in javascript - ['syntax error' , "Runtime Error" , "Logical Error"]

// Syntax error -> aapne code likhte time glti krdi ya syntax hi galat kiha

// ex - let✅  leht ❌

// Runtime Error -> errors created during running (execution) of the prog

// Ex :-
// function abcd(){
//    // lat a = 12 // syntax error
//    let a = 12;
//    console.log(a.name); // runtime error
// }


// Logical Error -> errors created due to wrong logic of the code

// screen p koi error nhi dikhega bs result galat milega

// Ex :-
// function add(a,b){
//     return a-b; // wrong logic to add
// }

// console.log(add(1,2));


// try catch block -> this is used handle errors

try{}
catch(err){}

// try chalega to catch nhi chalega aur jab try error throw karega to wo error catch block pakdega aur ab catch chalega

try{
    let a = 12;
    console.log(a.name.age)
}
catch(err){
    console.error("error occured")
    console.log(err.message) // sirf mainmessage of error
    console.log(err.name) // kis type ka error ka h
    console.log(err.stack) // error ki puri details
}

console.log("huiihui") // agr error try catch se handled nhi hota to error aane ke baad ye code nhi chalta


// try catch finally
try{}
catch(err){}
finally{}

// finally hmesha chalega

try{
    let a =12;
    console.log(a.name.nn)
}
catch(err){
    console.log(err)
}
finally{
    console.log("finally block")
}

// How to throw errors in javaScript

// new Error("something went wrong");

//    OR

// throw new Error("somethiinng went wrong")


try{
    let a =12;
    console.log(a.name.age);
}
catch(err){
    throw new Error("Something went wrong from our side, please wait for some time!"); // wwe make custom error to show

    //      OR

    // console.log(
    //   new Error(
    //     "Something went wrong from our side, please wait for some time."
    //   )
    // );
}







