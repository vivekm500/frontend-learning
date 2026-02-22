// useEffect :- useEffect use hota h kisi v kaam ko ko side stack pe chlane ke liye

// React UI bnata h aur UI ko continuously render krne ka kaam karta h

// React - UI banana -> Main stack
// Data Insert -> Side Stack

// useEffect(function(){
// },dependency array [])

// jab v ui change hoga  ya re-render hoga to useEffect chlega
// empty dependency array array lga do to ek baar hi chlega
// dependency array m kuchh rakh do to useEffect ka chlna uske change hone p depend krega


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const App = () => {

  // const [title, settitle] = useState('');

  // const [counter, setcounter] = useState(0);

  // const [number1, setnumber1] = useState(0);
  // const [number2, setnumber2] = useState(0);
  // const [number3, setnumber3] = useState(0);

  // useEffect(function(){
  //   console.log("useEffect is running");
  // },[number1,number2])

  const [user, setuser] = useState("");

  const [num, setnum,] = useState(0);

  const getData = async ()=>{
    
    const response = await axios.get("https://randomuser.me/api/");

    setuser(
      response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last,
    );

    console.log(
      response.data.results[0].name.first + " " + response.data.results[0].name.last,
    );
  }

  

  useEffect(function(){
   getData()
  },[num])

  return (
    <div>
      {/* <input
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
        type="text"
      /> */}

      {/* <h1>{counter}</h1>
      <button onClick={()=>{
        
        setcounter(counter+1)
      }}>Increase</button> */}

      {/* <h1>{number1}</h1>
      <button
        onClick={() => {
          setnumber1(Math.floor(Math.random() * 100));
        }}>Change Number1</button>

      <br />
      <br />

      <h1>{number2}</h1>
      <button
        onClick={() => {
          setnumber2(Math.floor(Math.random() * 100));
        }}>Change Number2</button>

      <br />
      <br />

      <h1>{number3}</h1>
      <button
        onClick={() => {
          setnumber3(Math.floor(Math.random() * 100));
        }}>Change Number3</button> */}

      {user}
        <h1>{num}</h1>
        <button onClick={()=>{
          setnum(num + 1)
        }}>Click Here</button>
    </div>
  );
}

export default App
