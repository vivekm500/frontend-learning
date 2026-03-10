import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section1 = () => {

  const [theme,settheme] =  useContext(ThemeDataContext)

  return (
    <div>
      <h3>Section1</h3>
      <p>{theme}</p>
    </div>
  )
}

export default Section1
