// CSR (client side rendering) :- backend se JSON Data aata hai aur use hum frontend pe load kr dete hai  -> (more improved SEO) -> Comparatively slow

// SSR (server side rendering) :- Server-side rendering (SSR) is a web development technique that generates full HTML for pages on the server for each request, sending a ready-to-render page to the client, which improves SEO and initial load speeds

// axios :- It is a tool used in api calling

// Axios is a popular, promise-based JavaScript library used in React (and Node.js) for making asynchronous HTTP requests to interact with APIs or backend services. It simplifies the process of fetching or sending data compared to the native fetch API.

// Promise-Based: Axios uses JavaScript Promises, which allows developers to use then() and catch() for handling responses and errors, or the cleaner async/await syntax for asynchronous operations.

// Automatic JSON Handling: It automatically transforms JSON data in the response into a JavaScript object, eliminating the manual parsing step required by the native fetch API (response.json()).

// to install axios run "npm i axios"

// import axios from 'axios'

// axios.get('api url') -> to gat data from any api

// axios se data hmesha promises ke form m aata h, use async await to solve this promise


import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User.jsx'

const App = () => {

    const [allData, setallData] = useState([]);

    const getData = async ()=>{
        
    //    const response =  await axios.get("https://picsum.photos/v2/list");

    // console.log(response.data)

    // OR we can use destructuring to directly save only data from the api response

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setallData(data)
        console.log(data);
    }

    // getData() // don't do this kyunki App continuosly chlta rhta h so ye function v continuously chlega aur api call baar-baar hota rhega automatically

    // hm chahte ki website khulte hi getdata bs ek baar chle so we will use "useEffect"

    useEffect(function(){
        getData()
    },[])

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}

      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
            <User elem={elem} />
          </div>
        })}

      </div>
      
    </div>
  );
}

export default App
