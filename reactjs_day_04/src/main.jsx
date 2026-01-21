import React from 'react'
import ReactDOM from 'react-dom/client'
import  './index.css'
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// in src folder there is a file called "eslint.config.js" -----> which is used to write aour set of custom rules to followed while writing javaScript

// .gitignore -----> in this file whatever is written will not get uploaded on github,   we .env file here like api keys or whatever wew want to hide

// in src folder we have a folder called "assets" in which we keep all the images , fonts and filese used in the website

// inside src folder we can create a folder called "components" for different components of the website ("we break the whole website in small-small components"),   inside this components folder whatever file we will make it's name should start from capital letter

// inside components folder we can have multiple jsx file for diferrent small-small components like navbar, homepage etc