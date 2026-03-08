Context Api is used in data centralization

instead of passing data in chain manner from upper to lower we make a center of data from where any component can access the data so that we don't need to pass data through different level/component or we don't need to do props drilling at each component

The Context API in React is a built-in feature that allows you to share data, such as a global state, functions, or settings (like a UI theme or authentication status), across the component tree without having to pass props manually at every level. This solves a common problem called "prop drilling", which makes code cumbersome and difficult to maintain as applications grow. 

Key Concepts and How It Works

The Context API involves three core components:
createContext: A function used to create a new Context object. This object contains a Provider and a Consumer. You can pass an optional default value when creating it.

Context.Provider: A React component that wraps the part of your component tree where you want the shared data to be available. It accepts a value prop, which holds the data you want to pass down to its descendants.

useContext Hook: A modern functional component hook used to read the context value from the closest Provider above it in the component tree. This is the primary way to consume context in modern React, replacing the legacy Context.Consumer component used in class components. 

----------------------------------

Hum data ko upper se lower bhej sakte but lower se upper nhi

lower se upper bhejne ke liye upper wale component m ek function bnao r uss function ko lower component me pass kr do ....aur jb uss function ko lower component me call kro to uske argument me data pass kr do r upper wale omponent ke function me uss data ko recieve kr lo

