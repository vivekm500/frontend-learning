import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext';

const Navbar = (props) => {

  // console.log(props)

  const data = useContext(userDataContext)

  console.log(data)

  return (
    <div className="h-10 w-full bg-emerald-600">
      <h1>This is {props.brand} {data}</h1>
      {props.children}
    </div>
  );
}

export default Navbar
