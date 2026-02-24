// Routing in React is the process of managing navigation between different components or "pages" in a single-page application (SPA) without requiring a full page reload. Since React itself is only a UI library and doesn't have built-in routing capabilities, developers use third-party libraries, most commonly React Router, to implement this functionality. 

// Single-Page Application (SPA): React applications are typically SPAs, meaning a single HTML page is loaded initially, and JavaScript dynamically updates the content as the user navigates.

// Client-Side Routing: Navigation is handled on the client (browser) side, intercepting URL changes and rendering the appropriate components, resulting in a smooth, app-like experience.

// Component-Based: React Router uses a declarative, component-based approach where you define routes as components within your application. 

// Routing in React Router DOM is the process of managing navigation and dynamically rendering different components or views in a single-page application (SPA) based on the browser's URL, without requiring a full page reload. It provides a way to simulate a multi-page application experience within a single HTML page

// react-router-dom is a tool which is used to perform routing inside a resctjs or nextjs

// React Router DOM provides a set of components and hooks to implement routing: 

// To install react-router-dom runt the command "npm i react-router-dom"

// after installing react-router-dom 
// "import {BrowserRouter} from react-router-dom" in main.jsx
// then wrap <App /> by BrowserRouter in main.jsx... like this 
// "<BrowserRouter> <App /> </BrowserRouter>"

// Now in App.jsx import {Routes, Route} from 'react-router-dom'
// declare Routes(ccollection of all Route) in App.jsx "<Routes></Routes>"  and inside Routes make Route like this   "<Route path="/about" element={<Aboout />} />" 
// In <Route /> mention path {where to go} and elements what to render
// we use link tag "<link><link/>" to redirect to any specific route keeping the page unloaded...  make Navbar Component as well and add it before "<routes></routes>" in "App.jsx"
// link tag is just upgraded version of a tag of HTML5
// link doesn't reload the page it just redirect while Route reloades the pages when we go to another page

// Nested Route can be made by writing path in this way - path="/product/men"
// Dynamic Route can be made by writing path in this way - path="/product/:id"

// you can access id y using useParams hook inside that component you rendered in Route - "const params = useParams()"   --- will get the id by "params.id"




// The BrowserRouter is a core component of React Router DOM that enables client-side routing in React applications using the standard HTML5 History API. It provides clean, human-readable URLs without hash fragments (e.g., example.com/about instead of example.com/#/about), synchronizing the application's UI with the URL and managing the browser's history stack (back/forward buttons). 

// Key Functions and Features

//Enables Client-Side Navigation: It allows users to navigate between different views or components within a single-page application (SPA) without triggering a full page reload, which improves performance and user experience.

//Manages URLs: The component uses the browser's native pushState, replaceState, and popstate events to dynamically update the address bar as the user navigates, while keeping the application's state intact.

//SEO-Friendly: By producing clean URLs, BrowserRouter makes it easier for search engines to crawl and index different pages of the application, which is a major advantage over the HashRouter.

//Provides Routing Context: Typically, you wrap your entire application with <BrowserRouter> at the top level of your component tree to provide the necessary routing context to all child components that use React Router features like <Routes>, <Route>, and <Link>

import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import RandomAbout from './pages/RandomAbout.jsx'
import Courses from './pages/Courses.jsx'
import Cohort1 from './pages/Cohort1.jsx'
import AnyCourse from './pages/AnyCourse.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <div>
      {/* anything outside routes will be same for all pages */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* nested route */}
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/cohort1" element={<Cohort1 />} />

        {/* Dynamic Route -> about/ ke baad kuchh v type kro to ye page RandomAbout page Khulega*/}
        <Route path="/about/:id" element={<RandomAbout />} />
        <Route path="/courses/:courseId" element={<AnyCourse />} />

        {/* Nested Dynamic Route */}
        <Route path="/courses/:courseId/detail" element={<CourseDetail />} />

        {/* Not found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
