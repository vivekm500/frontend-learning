import React from "react"
import { useState } from "react"


const App = () => {

  // By default whenever we submit a form then website gets reloaded , it is the default nature of form

  const submitHandler = (e)=>{
    e.preventDefault() 
    // it will prevent the default behaviour of form

    // console.log(username)

    const newAllusers = [...allusers]
    newAllusers.push({username,email})

    console.log(newAllusers)

    setallusers(newAllusers)

    setusername('') 
    setemail('')
    // when we will click submit, the input data will be vanished (set to empty string)
  }

  const [username, setusername] = useState('');

  const [allusers, setallusers] = useState([]);

  const [email, setemail] = useState('');

  return (
    <div>
      {/* Form Handling And two way binding */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        {/* <input
          type="text"
          placeholder="Enter your name"
          onChange={(dets) => {
            console.log(dets.target.value);
          }}
        /> */}

        <input
          type="text"
          placeholder="Enter your name"
          required
          value={username}
          onChange={(dets) => {
            setusername(dets.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(dets) => {
            setemail(dets.target.value);
          }}
        />

        <button>Submit</button>
      </form>

      {allusers.map((elem, idx) => {
        return <div key={idx}>
          <h1>{elem.username}</h1>
          <p>elem.email</p>
        </div>
      })}
    </div>
  );
}

export default App
