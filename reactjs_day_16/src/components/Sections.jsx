import React from 'react'

const Sections = (props) => {

  console.log(props)

  return (
    <div className='h-90 bg-zinc-400'>
      <h1 className='text-xl'>All Sections </h1>
      {props.children[0]}
      {props.children[1]}
    </div>
  )
}

export default Sections
