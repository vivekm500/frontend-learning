import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="/courses/kodex" element={<Kodex />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App
