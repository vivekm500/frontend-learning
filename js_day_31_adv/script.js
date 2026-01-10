// CLASS EXPRESSION

let Dog = class{
    constructor(){
        this.name = "Dodo";
        this.breed = "german shepherd";
    }
}

let an1 = new Dog();

// here Animal is name of the class and also a variable storing the class Animal



// INHERITANCE
// agr koi class hai jisme kuchh-kuuchh likha hai and aap maante ho ek nayi class usi ka extension hai to aap wo saare features puraani class se borrow kar sakte and nayi class me use kar sakte ho and apne naye features bhi bna sakte ho

class Animal{
    constructor(){
        this.hands = 2;
        this.legs = 2;
    }

    eat() {}
    braethe() {}
}

class Kekda extends Animal{
    constructor(){
        super();
        this.hands = 8;
        this.legs = 0;
    }

    susu() {}
} 

let k1 = new Kekda();

// here Animal is the base class and class Kekda is inherited from Animal class (class Kekda is extending class Animal)

class Marker{}
class BlueMarker extends Marker {}


// GETTER AND SETTER

class Animal2 {
  constructor() {
    this._age = 12; // _age is a private variable
  }

  set set_age(val){
    if(val<0){
        console.error("not valid");
        return;
    }
    this._age = val;
  }

  get get_age() {
    return this._age;
  }
}

let a1 = new Animal2();
//a1._age = 27 // age being a private variable we can change its value directly
a1.set_age = 37;
console.log(a1.get_age) 


// QUESTION PRACTICE

// Q1 - Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
    name: "vivek",
    email: "viv@123",
    login: function(){
        console.log("user logged in")
    },
};

user.login();

// Q2 - Imagine you now have 5 users. First, think how you would manage them without using a class.Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

let user2 = {
  name: "vivek",
  email: "viv@123",
  login: function () {
    console.log("user logged in");
  },
};

let user3 = {
  name: "vivek",
  email: "viv@123",
  login: function () {
    console.log("user logged in");
  },
};

let user4 = {
  name: "vivek",
  email: "viv@123",
  login: function () {
    console.log("user logged in");
  },
};

let user5 = {
  name: "vivek",
  email: "viv@123",
  login: function () {
    console.log("user logged in");
  },
};


// optimizing this long code using  a class

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    loggedin(){
        console.log("loggedin")
    }
}

let usr1 = new User("messi", "heart@123");
let usr2 = new User("Anii", "anii@123");
let usr3 = new User("raushan", "rr@123");
let usr4 = new User("tinku", "tinku@123");
let usr5 = new User("pinku", "pinku@123");


// Q3 - Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name: "apple",
    price: 69999,
    Fprice: function(discount){
        return this.price-(discount*this.price/100)
    }
}

console.log(product.Fprice(10));


// SECTION 2 - CLASSES AND OBJECTS 

// Q1 - Create a Car class with the following:brand, speed and a drive method that prints the car brand and speed

class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }

    drive(){
        return this.brand + "-" + this.speed;
    }
}

let car1 = new Car("BMW", 350);
console.log(car1.drive())

// Q2 - Create two different car objects from the same class and verify that their data is different.

let car2 = new Car("maruti", 210);
let car3 = new Car("hyndai", 250);

console.log(car2.drive());
console.log(car3.drive());

// SECTION 3 - CONSTRUCTOR AND THIS KEYWORD

// Q1 - Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.

class Student{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }

    introduce(){
        return this.name + " " + this.roll
    }
};

let student1 = new Student("vivek", 13);

console.log(student1.introduce());

// Q2 - Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.

// removing this will give undefined at that field because this refers to the current object being created.


// Q3 - reate an object with two methods: One method using a normal function: One method using an arrow function. Inside both, print this and observe the difference.

let obj = {
    sayName: function (){
        console.log(this);
    },
    sayArrowName: () => {
        console.log(this)
    },
}

obj.sayName()  // o/p - object
obj.sayArrowName() // o/p - window


// SECTION 4 - CONSTRUCTOR FUNCTION AND PROTOTYPE

// Q1 - Create a User constructor function (do not use class syntax).

// bina class ke bhi constructor function banta hai
// es6 se pehle constructor aise hi banta tha

function Usser(){
    this.name = 'vivek'
}

let user1 = new Usser();

// a function with function name that starts with capital can behave as a class

// Q2 - Add a login method in two ways: First, inside the constructor. Then, move the method to the prototype

class Admin{
    constructor(){
        this.password = "vbc#223";
        // this.login = function (){
        //     console.log("loggedin")
        // }
    }

    login(){
        console.log("loggedin")
    }
}

// Admin.prototype.login = function(){
//     console.log("loggedin")
// }

let admn1 = new Admin();


// Q3 - Create two User objects and compare their login methods using equality. Explain why the result is true or false.

let admn2 = new Admin();
let admn3 = new Admin();

// when login method is in constructor then it is false because now each new objects has its own login method

// when login method is in prototype then it is true because now each new objects shares same login method



// SECTION 5 - CALL, APPLY AND BIND

// Q1 - Create a function that prints this.name.

function abcd(){
    console.log(this.name)
}

let obj2 = {
    name: "vivek",
}

abcd.call(obj2);
