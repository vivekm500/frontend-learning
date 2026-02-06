import React from 'react'

const Card = (props) => {
  return (
    <div
      key={props.idx}
      className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw]  rounded-2xl py-5 px-8 text-center flex flex-col items-center bg-white text-black"
    >
      <img
        className="h-24 w-24 rounded-full object-center object-cover "
        src={props.elem.imageURL}
        alt=""
      />
      <h1 className="text-2xl font-semibold mt-1">{props.elem.username}</h1>
      <h5 className="text-lg text-blue-500 font-semibold my-1">
        {props.elem.userole}
      </h5>
      <p className="text-sm font-medium leading-tight">{props.elem.userDesc}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="px-4 py-2 bg-red-600 rounded text-white font-semibold mt-2 text-xs cursor-pointer active:scale-95"
      >
        Remove
      </button>
    </div>
  );
}

export default Card
