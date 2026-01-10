// function enhances code reusability

/*
function abcd(parameters){

}

abcd(arguments);  */

// Hoisting -> kisi k banne se pehle uska use krna

// variable hoisting is not possible
// a();

let a = function(){
    console.log("hii");
}
// function hoistinh is possible
abcd();

function abcd(){
    console.log("hello")
}

// PARAMETERS in js - ['required' , 'destructured' , 'default']

// required parameters :- jb parameter created ho bt arguments pass na hua ho
// “required parameter” usually refers to a function parameter that must be provided when calling the function.

function abcd1(a, b, c, d){
// agr aapne parameter bnaye and aapne umne arguments nhi bheje to fir wo value parameter ki undefined ho jayegi
}

abcd1();

// destructured :-

function abcd2({name, age}){
  console.log(name, age);
}

abcd2({name: "vivek", age: 22})

// rest operator :- multiple argument can be recieved by one parameter with ... infront of it (store in an array)

function abcd3(...val){
  console.log(val);
}

abcd3(1,2,3,4,5,6)

// default parameter :- initializing parameters with some default values

function abcd4(a = 0, b = 0, c = 0){
  console.log(a,b,c);
}

abcd4(1,2);


// ARGUMENTS - ['positional' , 'default' , 'spread']

// positional :- jis order m parameters h , usi order m arguments pass hona chahiye (JavaScript functions use positional arguments by default)

function abcd5(a, b, c, d){
  console.log(a, b, c, d)
}

abcd5(1, 2, 3, 4);

// spread :- Spread arguments in JavaScript use the spread operator (...) to expand an array (or iterable) into individual values.  It allows you to pass multiple values to a function as separate arguments.

function abcd5(a, b, c, d) {
  console.log(a, b, c, d);
}

let arr = [1,2,3,4]
abcd5(...arr);



// classic function
function abcd6(){}

// nested function :- function within function
function xyz(){
  function nstd(){
    console.log("nested");
  }
  nstd();
}

xyz();

//scope chain

let x =12; // global scope
function chain(){
  let y = 23;  // function scope
  function defg(){
    console.log(y);
  }
}

chain();


// IFEE (immediately invoked function expression) :- used to create private variable

(function(){
  let balance = 500;
})();


// MORE FUNCTIONS IN JS

// fat arrow function

let fnc = () => {
  console.log("heyyyy");
};

fnc();

// Anonymous function :- benaam function, jiska koi naam na ho

const greet = function () {
  console.log("Hello!");
};
greet();
// Here the function has no name—it’s assigned directly to greet.

// higher order function (hof) :- ek aisa function jo ki return kr de ek aur function ya fir wo function accept kr ek aur function parameter me

function anii(){
  return function(){
    console.log("hof")
  }
}

// anii()(); // ek () anii fnc ko chlane ke liye r dusra () returning fnc ko chlane ke liye

function anii1(a){
  a(); // a is now a function as it recieved a function 
}

anii1(function(){
  console.log("passing function, hof");
});
// the function which is passed as argument is callback function

// first class function :- hawa...fcf ek concept h ki function variable ki trh use ho sakte h

function fool(a, b){

}

 fool(function(){

 }, 2);