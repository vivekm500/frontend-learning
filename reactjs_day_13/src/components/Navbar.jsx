import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-8 py-4 bg-pink-900 mb-10">
        <h2>Navbar</h2>
        <input className="border-2" type="text" />
        <div className="flex gap-8 cursor-pointer">
          {/* <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/product">Product Page</a> */}

          <Link to="/">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/product">Product Page</Link>
          <Link to="/courses">Couses</Link>
          <Link to="/courses/cohort1">Cohort1</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar

// we use link tag "<link><link/>" to redirect to any specific route keeping the page unloaded