import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'


const App = () => {

    // const courseData = {
    //     courseName: "Cohorot 2.0",
    //     instructor: "Sarthak Sharma",
    //     mentor: "Anubhav",
    //     Duration: "6 Months"
    // }


    const [theme, settheme] = useState('Light');

    const changeTheme  = (newTheme)=>{
      settheme(newTheme)
    }

  return (
    <div>
      <h1>Theme is {theme} </h1>
      <Navbar  changeTheme={changeTheme} />
      

    </div>
  )
}

export default App
