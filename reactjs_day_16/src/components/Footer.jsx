import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Footer = () => {

  const user = useContext(userDataContext)

  return (
    <div className='absolute bottom-0 w-screen h-10 bg-blue-400'>
      <h1>This is Footer</h1>
      {user}
    </div>
  )
}

export default Footer
