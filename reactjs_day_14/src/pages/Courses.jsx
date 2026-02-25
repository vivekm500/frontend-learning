import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='course'>
      <p>Course is LIVE!!!</p>
      <p>Course is LIVE!!!</p>
      <p>Course is LIVE!!!</p>
      <p>Course is LIVE!!!</p>

      <Outlet />
    </div>
  );
}

export default Courses
