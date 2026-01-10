//VARIABLES
// var , let ,const

var a = 12;
let b = 24;
const discount = 15; //when we dont want the to be changed throughout the program...we want it to be constant


//CONSOLE
console.log("hello world"); //to print something

console.info("hii all"); // it is also used to print something...kuchh kuchh browsers bs console.info ko thoda alag tarike se show krte h unke aage ek i sign aa jata h

console.warn("suspicious don't click"); //used to give warning..print message with a warn sign

console.error("server not reachable"); //used to give error msg...print msg with a red cross error sign

console.table({name: "vivek"}); //used to print data in table format...used with object like here object is name

//PROMPT ALERT
prompt("number ?"); // used to ask something with a popup msg when we open a website

let nm = prompt("name ?"); // it will ask name with a msg popup msg and it will be stored in nm variable
console.log(nm);

//ALERT
alert("welcome"); // it will print the msg welcome with a popup when website is opened


// STRINGS:- anything written in ""(double quotes) or '' (single quotes) is strings
"vivek"
"hello"
//agr kisi no m v special character ya koi character jod do to wo string bn jata h
"12456a"
"$bhdsvh"
"967659#"

//SLICE:- used to remove a specific portion
"harsh bhai kaise ho".slice(6, 10); // output- 'bhai'  //it exreacted from index 6to9


//template-strings(`` backticks) or template literals
`i am ${3+4}`; // output - i am 7 // with the help of backticks hm koi operation perform krwa sakte strings k ander

// split :- hisse krne k liye usekrte h
"harsh".split() // output- ['harsh']

"harsh".split("") // output - ["h", "a", "r", "s", "h"]

"harsh".split('') //output - ['h', 'a', 'r', 's', 'h']

"vivek kumar".split(' ') //output - ['vivek', 'kumar'] //jaha v space hoga woha se tutega

"hello kaise ho".split('h') //['', ello kaise', 'o'] // jaha v h hoga woha se tutega


//replace and replaceAll
"harsh bhai kaise ho".replace('h','g') //output- 'garsh bhai kaise ho' // it will only replace first h

"harsh bhai kaise ho".replaceAll('h','g') //output- 'garsg bgai kaise go'  //it will replace all h


//includes
"huihui".includes('h'); //output-true //it checks if it exists or not

//statements and expressions

// ek complete line ka code jiske last m ; ho wo statement h

// expression wo hota h jo ek value produce kre
