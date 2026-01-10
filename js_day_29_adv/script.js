// oops

// code ko objects, classes and functions me baant dena

// modular
// scalable
// manageable
// promise
// easy to fix
// reuse

// ek bande ki details ek sathj rakhne k liye object ka use krte h
let obj = {
    name: "harsh",
    age: 22,
    email: "viv@123" 
}

let user1 = {
    name: "vivek",
    age: 32,
    email: "viv@123",
    address: "india"
};

let user2 = {
  name: "anii",
  age: 42,
  email: "viv@123",
  address: "india",
};

// class -> blueprint (saancha)

// constructor -> automatic chalne wala function

class Remote{
    constructor(product, price, color){
        this.product = product
        this.price = price
        this.color = color
    }

    powerOn(){
        console.log("this machin is on");
    }
        powerOff() {
            console.log("the machine is off");
        }
    
}

let remote1 = new Remote ("Lenovo", 4999, "white");

// new ka matlab hota h ek blank object

let remote2 = new Remote("diakin", 13200, "blue")

// class ka naam capital letter se surur hona chahiye...phir sbse pehle constructor bnayenge

class BiscuitMaker{
    constructor(){
        this.name = "ParleG" // default value
        this.price = 10
    }
}

let biscuit1 = new BiscuitMaker();
let biscuit2 = new BiscuitMaker();
let biscuit3 = new BiscuitMaker();
let biscuit4 = new BiscuitMaker();

// classes bnate h taki har baar ek naya object mil jaye

// class object ki factory h

// har baar new word ke sath class run kroge to ek naya object milega aur constructor chal jayega

class AlooChaat {
  constructor() {
    this.price = 50;
    this.oil = "5ml";
    this.oilBrand = "Saffola";
    this.masaale = ["dhaniya", "pudina", "mirch"];
  }

  pack() {
    console.log("aloo chaat packed");
  }

  unpack() {
    console.log("aloo chaat unpacked");
  }
}

let acl = new AlooChaat();

acl.pack();



class Kitab {
    constructor(naam, daam, lekhak, rang){
        this.name = naam;
        this.price = daam;
        this.author = lekhak;
        this.color = rang
    }

    pannaPalto(){}
    bookMarkLagao(){}
    padhlo(){}
}

class User {
    constructor(){
        this.username = "vivek";
        this.age = 23;
        this.email = "viv@123"
    }

    khaanaKhao(){}
    saansLo(){}
}

let k1 = new Kitab("moral", 350, "vivek", "white");
let k2 = new Kitab("computer science", 650, "gopi bahu", "red");
let k3 = new Kitab("constitution of india", 362, "swatantra senanis", " dark blue");

// jab koi class ko call krte h aur kuchh bhej dete h to wo constructor me chli jati h.... its like a function


// this
// this ki value chlte (runtime) me decide hoti h

// constructor -> ek function jo automatic chalta h jaise hi class se naya instance bnaya jata h

let k4 = new Kitab()  
// k4 is an instance of class Kitab

class Human{
    constructor(){
        this.nmae = "abcd"
        this.age = 27;
    }

    // saansLo(){
    //     console.log('Breathe')
    // }
    // khaanaKhalo(){
    //     console.log("eat")
    // }
}

// jab v hm new human bnayenge to usme saansLo() aur KhaanaKhalo() function apne aap aa jayega

Human.prototype.saansLo = function () {
    console.log("Breathe")
}

Human.prototype.khaanaKhao = function () {
  console.log("eat");
};

// prototype -> means shared memory

// saansLo aur khaanaKhao dono Human class ke shared memory me add ho gya h.... to ab jitne v new Human bnenge wo share krenge saansLo aur khaanaKhao

let h1 = new Human();
let h2 = new Human();

