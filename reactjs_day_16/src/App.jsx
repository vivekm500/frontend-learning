import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='app-div'>
      <Navbar brand='Guccci'>
        <h1 className='text-red-600'>Danish Bhaiiii</h1>
      </Navbar>

      <Sections>
        <h1>Halku Re</h1>
        <h2>Batman Re</h2>
      </Sections>
      <Footer />
      
    </div>
  );
}

export default App
