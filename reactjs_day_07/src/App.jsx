import React, { useState } from 'react'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import Washroom from './components/Washroom.jsx'

const App = () => {

  // usestate
  let [num, setnum] = useState(10);
  // Here num - it is readonly and it's current value is 10,  setnum - it is write only using which we will write value or update the value on web

  const btnClicked = ()=>{
    
    setnum(num+1) // asynchronous function
    // don't use num++ as it is post-increament so first value will be used and then updated so to increase by one we have to click twice 
  }

  const [king, setking] = useState('Haridas');

  const changeKing  = ()=>{
    setking("vivek")
  }

  const [count, setcount] = useState(0);

  const [nmb, setnmb] = useState(0);

  const arr = ['vivvek', 'rahul', 'nishant', 'anii', 'manish'];
  const [idx, setidx] = useState(0);

  // const marks = [88,76,90,67,28]
  const [marks, setmarks] = useState([60,43,96,13,29]);
  function graceStudent(){
   const newMarks =  marks.map((elem)=>{
      // return elem+5;
      if(elem>95){
        return elem
      } else{
        return elem+5
      }
    })
    setmarks(newMarks)
  }


  const [gender, setgender] = useState('Male');
  function changeGender(){
    if(gender ==  'Male'){
      setgender("Female")
    } else if(gender == 'Female'){
      setgender('Other')
    } else{
      setgender('Male')
    }
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Increase</button>
      <hr />

      <h2>{king}</h2>
      <button onClick={changeKing}>Change king</button>
      <hr />

      <h3>{count}</h3>
      <button
        onClick={() => {
          setcount(count + 5);
        }}
      >
        Inc by 5
      </button>

      <button
        onClick={() => {
          setcount(count - 5);
        }}
        style={{ marginLeft: 2 }}
      >
        decc by 5
      </button>
      <hr />

      <div className="box">{nmb}</div>
      <button
        onClick={() => {
          let rdm = Math.floor(Math.random() * 100);
          setnmb(rdm);
        }}
      >
        click to generate random numbers
      </button>
      <hr />

      <h1 style={{ color: "red" }}>{arr[idx]}</h1>
      <button
        onClick={() => {
          if (idx < arr.length - 1) {
            setidx(idx + 1);
          }
        }}
      >
        Change user
      </button>
      <hr />

      {marks.map((elem, idx) => {
        return (
          <h1 key={idx}>
            Studen {idx + 1} = {elem} ({elem > 33 ? "PASS" : "FAIL"})
          </h1>
        );
      })}
      <button onClick={graceStudent}>Give them grace</button>
      <hr />
      
      {/* Conditional rendering */}
      <div className='option'>
       <h1>{gender}</h1>
       <button onClick={changeGender}>Change Gender</button>
       {/* {gender == 'Male' ? <Men /> : <Women />} */}

       <Washroom user={gender} />
      </div>
      <hr />

      
    </div>
  );
}

export default App
