import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  let age = 21;
  const user = 'Vivek'
  let arr = [10,20,30,40]

  return (
    <div>
      <Card />

       {/* Here we can write our javaScript in curly braces */}

      <h1>{user}, {age}, {arr[3]}</h1>

      <h2>{arr.map((elem)=>{
        return <h1>{elem*2}</h1>
      })}</h2>
    </div>
  )
}

export default App
