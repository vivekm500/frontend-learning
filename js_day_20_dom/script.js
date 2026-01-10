

// Synchronous prog language :- Tasks run one after another, in a sequential manner. A task must finish completely before the next one starts.

// Asynchronous prog lang :- Tasks can start and run without waiting for previous tasks to finish. Long-running tasks run in the background, allowing the program to keep working.

// JavaScript is a synchronous, single-threaded language with asynchronous capabilities. JavaScript is Synchronous by Default. It executes one line at a time. It runs on a single thread. It follows top-to-bottom order // javaScript can be made to behave Asynchronous


// setTimeout(function(){},time in ms) :- used to implement delay

// 1000ms = 1sec

setTimeout(function(){
    console.log("Hello")
},3000)


// project practice

let user = "Anii";

let btn = document.querySelector('button')

let h1 = document.querySelector("h1");

btn.addEventListener('click', function(){
    h1.innerHTML = 'changing user...';

    setTimeout(function(){
        h1.innerHTML = 'Hello i am Anii!';
    },2000)
})


// setInterval(function(){},time in ms) :- repeat after a fixed interval of time (controlled loop)

let a = 0;

let inc = setInterval(function(){
    a++;
    console.log(a);
},500)

// clearInterval() :- used to stop the setInterval

// clearInterval(inc);

setTimeout(() => {
    clearInterval(inc);
},5000)


// project download simulator

let btn2 = document.querySelector('#btn2');

let grow = 0;

let inner = document.querySelector('.inner')

let h2 = document.querySelector('h2')

btn2.addEventListener('click', () => {
    btn2.style.pointerEvents = "none";

    let num = 50 + Math.floor(Math.random()*50)
    

    let percnt = setInterval( () => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
        
    },num)

    setTimeout( () => {
       clearInterval(percnt)
       btn2.innerHTML = "Downloaded";
       btn2.style.opacity = 0.5;
     }, num*100)

     console.log(' your file will be downloaded in', num/10, 'seconds')
})



