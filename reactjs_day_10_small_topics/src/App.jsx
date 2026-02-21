import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const cardData1 = {
    username: "Vivek",
    role: "Engineer",
    email: "viv@123gmail.com",
    profile:
      "https://images.unsplash.com/photo-1771345207885-d1d91f4e663f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

   const cardData2 = {
     username: "Virat",
     role: "Cricketer",
     email: "viv@123gmail.com",
     profile:
       "https://images.unsplash.com/photo-1682134898856-78e0e50d0ead?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   };
  
  return (
    // as we know we can not return multiple tags direlty so we hv to conatian or wrap it up in a div but with fragments we wrap them in an empty tag called fragmnets which will just contain the multiple tags we can't give any property to this fragment

    // fragments are empty tags <> </> using which we avoid making extra <div></div> and we can directly write multiple tags in our fragments

    <>
      <h1>Hello</h1>
      <h2>Namaste</h2>

      <Card cardData={cardData1} />
      <Card cardData={cardData2} />
    </>
  );
}

export default App
