import React from 'react'
import { useState } from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const [username, setusername] = useState('');

  const [userole, setuserole] = useState('');

  const [imageURL, setimageURL] = useState('');

  const [userDesc, setuserDesc] = useState('');

  const [alluser, setalluser] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username,userole,imageURL,userDesc)

    // const olduser = [...alluser]
    // olduser.push({username,userole,imageURL,userDesc})
    // console.log(olduser)

    // setalluser(olduser)

    // OR
    setalluser([...alluser,{username,userole,imageURL,userDesc}])

    setusername('')
    setuserole('')
    setimageURL('')
    setuserDesc('')
  }

  const deleteHandler = (idx)=>{
    const copyusers = [...alluser]
    copyusers.splice(idx,1)
    setalluser(copyusers)
  }

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

        {alluser.map((elem,idx)=>{
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })}

      </div>

    </div>
  );
}

export default App
