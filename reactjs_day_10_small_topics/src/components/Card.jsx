import React from 'react'
import Upper from './Upper';
import Lower from './Lower'

const Card = (props) => {

  console.log(props.cardData.username)

  return (
    <div className="card">

      {/* <div className="upper">
        <img
          src="https://images.unsplash.com/photo-1771310972800-f4878291b231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="lower">
        <h2>Joseph Antony</h2>
        <h4>john@gmail.com</h4>
        <h3>Developer</h3>
      </div> */}

      <Upper cardData={props.cardData} />
      <Lower cardData={props.cardData} />


    </div>
  );
}

export default Card
