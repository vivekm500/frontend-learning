class Sketch {
    constructor(){
        this.character = "doraemon";
        this.color = "blue";
        this.someFnc = function () {};
    }

    // speak(){}
    // walk(){}

}

Sketch.prototype.speak = function() {};
Sketch.prototype.walk = function() {};

let sktc = new Sketch();

// constructor ke andar jo kuchh v wo har new object ke khudka hoga....par har object k pass khudka speak() aur walk() nhi hoga wo shared hoga

// class me multiple constructor nhi hote .... ek me ek hi constructor hote h

// "THIS"

// "this" ek special keyword hota hai

// this ki value jb chlega uss time...uss context me decide hota hai

console.log(this); // output - window

function abcd() {
    console.log(this) // output - window
}
abcd();

let obj = {
    name: "vivek",
    fnc: function (){
        console.log(this) // output - object
    }
}

obj.fnc()  // calling function from object


// values of "this" in different context

// global -> window
console.log(this)

// function -> window
function fnc(){
    console.log(this)
}

// es5 function inside object
let obj1 = {
   name: "anii",
  fnc: function () {
    console.log(this.name); // output - object ..... this ki value parent object ho jayegi
  },
};

obj1.fnc();

// es6 function inside object -> window
let obj2 = {
    fnc: ()=>{
        console.log(this) 
    }
}
// es6 function -> fat arrow function
obj2.fnc();

// es5 function inside es5 function inside object -> window
let obj3 = {
    fnc: function(){
        function abcd(){
            console.log(this)
        }
        abcd();
    }
}

obj3.fnc()

// es6 function inside es5 function inside object -> object



// CALL , APPLY AND BIND

// ek function me "this" ki value window hoti h, agr aap chahte ho ki wo value window naa ho par koi aur object ho tab aap use kr sakte call apply bind ka

let objct = {
    name: "harsh",
}

function fun(a, b, c){
    console.log(this, a, b, c);
}

fun.call(objct, 1, 2, 3)

// call the function using keyword .call with function name and pass the object name jise hm this ki value bnana chate h  after that pass the parameters respectively

// other way to do that is using apply but here other parameters are passed in an array
fun.apply(objct, [1, 2, 3]);

// bind function ko directlty run nhi karta ,  ye ek naya function deta h jisme this ki value object hogi .... so save the function in a variuable and then run that newVariable
let newfnc = fun.bind(objct, 1, 2, 3)

newfnc();

// caall -> fnc chlata h and this ki value set krta h

// apply -> wahi karta hai jo call karta hai and arguments main pehli value this ki and dusri value array hoti hai

// bind -> wohi karta h jo call karta hai and aapko ek naya fnnc deta h