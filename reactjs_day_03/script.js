// js - javascript
// jsx -  extendible javaScript (javaScript + HTML)

// syntax to create an element in React.js

// let variableName = React.createElement('konsa element create krna h', '{attributes}', children)

// ex

// let h1 = React.createElement('h1', {id: 'king', class: 'hui'}, 'Hello world')

import app from './app.js'

const root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(app())


// VITE - ek bundler h jo folder bnake deta h
// just go vs terminal and run 'npm create vite'
// using command 'cd folderName' go to that folder and then run the command 'npm run dev' to run the server and get a localhost url
// press 'h + enter' in the terminal to open help