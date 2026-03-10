import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = (props) => {

    // console.log(props)

    const user = "Vivek"

  return (
    <div className='context-div'>
      <userDataContext.Provider value={user}>
        {props.children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
