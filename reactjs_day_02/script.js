import hero from './app.js'

console.log(hero())

import test from './test.js'

console.log(test())


//    REACT

// React - its a library

// GSAP  (moving animations)
// Lenis (scrolling smoothness)
// Swipper (sliders)
// three.js (3D animation)
// React.js (UI)

// React.js was developed by Facebook

// library - used to implement any specific feature ex- React.js

// framework  - provide full ecosysytem or environment to build something ex-Angular

/*
React.js is a JavaScript library for building user interfaces, mainly single-page applications (SPAs) where the UI changes dynamically without reloading the page.

Important correction upfront:

React is NOT a framework

It does ONE job well: rendering and managing UI efficiently

It was created by Facebook (Meta) and is now one of the most used UI libraries in the world.
*/

// GSA

// GSAP use krne k liye gsap ki cdn(content delivery network) html me javaScript ke just upar lagate h

// gsap.to('#box',{
//     x: 500,
//     duration: 2,
//     delay: 1
// })


//      REACT

// REACT - UI bnana
// ReactDOM - React and DOM ko connect krna

// let h1 = document.createElement('h1')

// h1.innerHTML = 'Hello from JS'

// document.body.appendChild(h1)

let h1 = React.createElement('h1', {id: 'hero'}, 'Hello from React')

let h2 = React.createElement("h1", {class:'heroin'}, "This is h2");

// let container = document.querySelector('#container')

// let div = React.createElement('div', {id: 'parent', class: 'elem'}, [h1,h2,h()])

let root = ReactDOM.createRoot(document.querySelector('#container'))

//root.render(h1) // it only accepts one argument

root.render(div)


//
// function  h1(){
//     return React.createElement('h1', null, 'Hello from function h1')
//  }

//   OR

    
const h = ()=> React.createElement('h1', null, 'Hello from function h1')

let div = React.createElement("div", { id: "parent", class: "elem" }, [
  h1,
  h2,
  h(),
]);