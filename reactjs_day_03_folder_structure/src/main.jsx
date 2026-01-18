import './index.css'
// we can also link this css in html to use or we can import in mainjs

import ReactDOM from "react-dom/client"

import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />);
// because we using jsx we can call the function in self closing loop like <App />
