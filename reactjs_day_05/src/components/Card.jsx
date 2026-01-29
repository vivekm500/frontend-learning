import React from 'react'

const Card = (props) => {
  
  return (
    <div className="bg-white px-5 py-3 rounded  m-2 border-2 border-red-500 h-40 w-40">
      {/* <h1>This is card of {u}</h1> */}

      {console.log(props)}
      {console.log(props.user)}

      <h1 className="text-2xl font-semibold text-black">{props.user}</h1>
    </div>
  );
}

export default Card
