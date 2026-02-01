import React from 'react'
import Navbar from './components/Navbar.jsx'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'

const App = () => {

  const user1 = {
    name: 'Vivek',
    age: 21,
    gender: 'male'
  }

  const user2 = {
    name: "Nikita",
    age: 25,
    gender: "female",
  };

  const user3 = {
    name: "Nishant",
    age: 8,
    gender: "male",
  };

  function btnClicked(a){
    console.log('button is clicked!!',a)
  }

  // btnClicked()

  return (
    <div>

      <Navbar title="Anii" color='red' links={["Home", "About", "Account", "Contact"]} />
      <Navbar title="❤️" color='blue' links={["Home", "Services", "Courses", "Contact", "Videos"]} />
      <Navbar title="vivek" color='green' links={["Home", "Product", "Men", "Women"]} />

      {/* CONDITIONAL RENDERING */}

      {user3.gender == 'male' ? user3.age>10 ? <Men /> : <Women /> : <Women />}

      <button
      onClick={function(){
        btnClicked(10)
      }}   //similar to addEventListener
      className='active:scale-95 px-5 py-3 bg-emerald-700 m-2 rounded text-white font-bold cursor-pointer'>Click to Download</button>
    </div>
  );
}

export default App
