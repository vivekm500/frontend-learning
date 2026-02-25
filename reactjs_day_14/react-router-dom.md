-- React makes SPA-(single page application) - URL change hone pe kuchh nhi hota tha

-- React Router Dom -
  -React Router - Logic (which page will open with what link)
  -React Router Dom - keeps history / API hhistory / track page location

-----------------------------
-- Types of Routers

  -React Router DOM provides several router implementations that manage navigation and keep the application's UI in sync with the URL or memory state. The main types are the BrowserRouter, HashRouter, and MemoryRouter, which have distinct properties and use cases

1. BrowserRouter
    -History API
    -kepp URL clean
    -used In almost all Modern apps
    -Needs Server Config
    -Good SEO

    -Properties: This is the recommended router for most modern web applications. It uses the HTML5 History API (pushState, replaceState, etc.) to keep the UI in sync with the URL, resulting in clean, human-readable URLs without hash fragments (e.g., http://example.com/about).

 -Uses:
   -Ideal for single-page applications (SPAs) where you want standard, clean URLs.

  -Requires a server that can handle dynamic routing (configuring the server to always serve the main index.html file for any route).

 -Offers improved Search Engine Optimization (SEO) because search engines can more easily crawl and index the clean URLs.


2. HashRouter

   -Properties: The HashRouter uses the hash portion of the URL (e.g., http://example.com/#/about) to manage routing. The part after the # symbol is not sent to the server, so it doesn't require special server-side configuration.
   -used in older Browsers
   -No SEO

 -Uses:
  -Best for environments where the server cannot handle dynamic routing, such as when hosting on static file servers like GitHub Pages.

  -Useful for simple projects or prototypes that don't need clean URLs or SEO optimization.

  -Provides backward compatibility for older browsers that do not support the HTML5 History API.


3. MemoryRouter

  -Properties: This router stores the navigation history in memory, not in the browser's URL bar or history stack. It does not affect or rely on the browser's address bar.

 -Uses:
   -Primarily used for testing React components that involve routing logic, as it allows you to test navigation without interacting with a real browser environment.

   -Suitable for non-browser environments like React Native or Electron applications. 


4. static Router

  -In react-router-dom, the StaticRouter is a specialized router designed for environments where the location never changes—most notably during Server-Side Rendering (SSR). 

-Core Properties
  -Import Location: In version 6, it must be imported from react-router-dom/server.

  -Statelessness: It does not actually "navigate." It takes a fixed location prop and renders the matching UI for that specific path.

  -No Browser Dependency: It does not require a window object or the HTML5 History API, making it compatible with Node.js environments. 

--Primary Uses
 -Server-Side Rendering (SSR): Used on a Node.js server to render the initial HTML for a specific URL request before sending it to the client. This improves SEO and initial load performance.

 -Static Site Generation (SSG): Used during the build process to pre-render routes into static HTML files.

 -Testing: Sometimes used in simple unit tests when you only need to assert how a specific route renders without simulating navigation.

--Key Props
 -location: (Required) A string or object representing the URL to render (e.g., req.url from an Express server).

 -basename: The base URL for all locations, used if your app is hosted in a sub-directory. 


 ----------------------------
 Routes - ERoutes are container that will contain all Route

 Route  - it will tell that if path(URL) is x then y will be shown
        -website reloads as we move to different page

---------------------------
--"<Link><Link/>" using link tag when we move to diffrent page website will not reload , it will just redirect us to different pages just like "<a><a/>" tag

it just do link redirect

 To target link tag in css just target a tag and all properties will be applid to link tag

 Instead if link tag we can use NavLink tag which gives styling features

 The <NavLink> component in React Router is used for navigation and is similar to the <Link> component, but with the added ability to automatically apply styling to the link that matches the current URL. This feature is particularly useful for creating navigation menus where the active page needs to be visually highlighted. 

 You can customize the active state using the className, style, or children props, which receive a function with an isActive boolean (and isPending and isTransitioning in newer versions). 
React Router
React Router

Styling with CSS classes (recommended): By default, an active class is added to the <NavLink> element when it matches the current route.

import { NavLink } from "react-router-dom";

"--do read out navigating in docs on react-router-website--"

----------------------------------
--The <Outlet /> component in React Router is a crucial element used for rendering nested child routes within a parent route's layout component. It acts as a placeholder that dynamically displays the appropriate child component based on the current URL. 

-Key Purposes and Benefits

  Layout Management: The primary use case for <Outlet /> is to create shared layouts (like a consistent header, navigation bar, or footer) that persist while only the main content area changes with navigation.

   Code Reusability: It allows you to define common UI structures once and reuse them for many pages, reducing redundant code.

   Simplified Routing: <Outlet /> enables a cleaner, more modular way to manage complex routing logic by nesting routes. 

How to Use the Outlet
 -To use the Outlet, you need two main parts: a Layout Component and the Route Configuration. 


---------------------------------
we can also createBrowserRouter for routing

createBrowserRouter is the recommended way to handle routing in all modern web projects using React Router because it enables advanced features like data loading (loader), mutations (action), and error handling. It uses the DOM History API to manage the browser's history stack and update the URL without page reloads, similar to BrowserRouter, but is configured with a data-centric approach. 

--Key Features & Usage
 Data APIs: It unlocks powerful data management APIs, allowing you to fetch data before components render and handle form submissions directly in your route definitions.

 Configuration as Data: Routes are defined as an array of JavaScript objects, offering more flexibility compared to the JSX-based approach of <BrowserRouter>.

 Nested Routes & Layouts: It fully supports complex, nested layouts and shared UI components (like a header/sidebar) using the children property in route objects and the <Outlet /> component in the parent layout.

 Error Handling: It allows you to specify an errorElement within a route definition to gracefully handle errors that occur during data loading, actions, or rendering within that route's subtree. 

--Basic Implementation

 To use createBrowserRouter, you define your routes outside of your React components and then pass the resulting router object to a <RouterProvider> component at the root of your application. 

--JSX

 import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

// A layout component to wrap children routes
function Layout() {
  return (
    <div>
      <header>My Website Header</header>
      {/* Outlet renders the matched child route component */}
      <Outlet /> 
      <footer>My Website Footer</footer>
    </div>
  );
}

// Define the routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // Catches errors for the whole layout subtree
    children: [
      { index: true, element: <Home /> }, // Index route for the parent path "/"
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

// Render the application with the RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
