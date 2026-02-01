import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className="bg-pink-700 mb-1 text-white px-8 py-3 flex justify-between items-center">
      <h2>{props.title}</h2>

      <div className='flex gap-5'>
        {props.links.map((elem,idx)=>{
          return <h4 key={idx}>{elem}</h4>
        })}
      </div>
    </div>
  );
}

export default Navbar
