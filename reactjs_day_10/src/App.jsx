import React from 'react'
import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");

  const [userole, setuserole] = useState("");

  const [imageURL, setimageURL] = useState("");

  const [userDesc, setuserDesc] = useState("");


  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  console.log(localData)

  const [alluser, setalluser] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, userole, imageURL, userDesc);

    const oldusers = [...alluser]

    oldusers.push({username,userole,imageURL,userDesc})
    setalluser(oldusers)

    localStorage.setItem('all-users',JSON.stringify(oldusers))
    

    setusername("");
    setuserole("");
    setimageURL("");
    setuserDesc("");
  };

  const deleteHandler = (idx) => {
    const copyusers = [...alluser];

    const conf = confirm("Are you sure you want to delete this!")
    if(conf){
      copyusers.splice(idx, 1);
    } else{
      alert("not deleted")
    }
    
    setalluser(copyusers);
    localStorage.setItem("all-users", JSON.stringify(copyusers));
  };

  return (
    <div className="h-screen bg-black text-white overflow-auto">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2"
      >
        <input
          value={username}
          onChange={(elem) => {
            setusername(elem.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] "
          type="text"
          placeholder="enter your name"
        />

        <input
          value={imageURL}
          onChange={(elem) => {
            setimageURL(elem.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] "
          type="text"
          placeholder="Image url"
        />

        <input
          value={userole}
          onChange={(elem) => {
            setuserole(elem.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] "
          type="text"
          placeholder="Enter role"
        />

        <input
          value={userDesc}
          onChange={(elem) => {
            setuserDesc(elem.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] "
          type="text"
          placeholder="Enter Description"
        />

        <button className=" active:scale-[0.98] px-5 py-2 bg-emerald-700 rounded m-2 w-[98%] cursor-pointer ">
          Create user
        </button>
      </form>

      <div className="flex flex-wrap gap-4 px-4 py-10">
        {alluser.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw]  rounded-2xl py-5 px-8 text-center flex flex-col items-center bg-white text-black"
            >
              <img
                className="h-24 w-24 rounded-full object-center object-cover "
                src={elem.imageURL}
                alt=""
              />
              <h1 className="text-2xl font-semibold mt-1">
                {elem.username}
              </h1>
              <h5 className="text-lg text-blue-500 font-semibold my-1">
                {elem.userole}
              </h5>
              <p className="text-sm font-medium leading-tight">
                {elem.userDesc}
              </p>
              <button
                onClick={() => {
                  deleteHandler(idx);
                }}
                className="px-4 py-2 bg-red-600 rounded text-white font-semibold mt-2 text-xs cursor-pointer active:scale-95"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

