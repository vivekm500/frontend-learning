import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

  const [theme,settheme] = useContext(ThemeDataContext)

  return (
    <div className='foot'>
      <h1>Footer</h1>
      <h2>{theme}</h2>
    </div>
  )
}

export default Footer
