import React from 'react'

const Button = (prp) => {
  return (
    <div className='bg-emerald-700 px-4 py-2 rounded m-2 w-fit text-white font-bold cursor-pointer'>
      {prp.text}
    </div>
  )
}

export default Button
