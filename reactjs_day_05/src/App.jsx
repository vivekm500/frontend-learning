import React from 'react'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'


const App = () => {

  // let age = 21;
  // const user = 'Vivek'
  // let arr = [10,20,30,40]

  const users = ["anii", "manish", "vikash", "sudhir"];

  return (
    <div className="p-10 text-white h-screen bg-black overflow-auto">
      {/* <Card /> */}

      {/* Here we can write our javaScript in curly braces */}

      {/* <h1>
        {user}, {age}, {arr[3]}
      </h1> */}

      {/* <h2>
        {arr.map((elem) => {
          return <h1>{elem * 2}</h1>;
        })}
      </h2> */}

      {/* {Card("vivek")}
      {Card("Aniii")} */}

      {/* {Card("Vivek", 21)}
      {Card("Anii", 21)}
      {Card("Vikash", 31)} */}

      {/* <Card user="vivek" age={21} /> */}

      {/* <Card user="Anii" age={21} /> */}

      {/* whatever atrrributes we will pass in html will we recieved as an object on the other end */}

      {/* <Button text="Buy Now" />

      <Button text="Explore Courses" /> */}

      {users.map(function(elem){
        return <Card user={elem} />
      })}
    </div>
  );
}

export default App
