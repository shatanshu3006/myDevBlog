'use client'            //as nextjs uses serverside rendering 

import React, { createContext,useState,useEffect } from 'react';
// 	1.	Create a Context:
// Use the createContext function to create a context.
// 2.	Provide a Context:
// Use the Provider component to wrap the part of your component tree that needs access to the context value. The value prop of the Provider is where you pass the context data.
// 3.	Consume a Context:
// There are two main ways to consume a context: using the useContext hook or using the Consumer component.
// Using useContext Hook (Function Components):


export const ThemeContext= createContext();

const getFromLocalStorage = ()=>{


//     The topmost if condition (if (typeof window !== "undefined")) is used to check if the code is running in a browser environment, where the window object is available. This is important because certain JavaScript environments, like Node.js or during server-side rendering with frameworks like Next.js, do not have a window object.
// Detailed Explanation
// 	1.	Browser vs. Non-Browser Environments:
// 	•	Browser Environment: In a browser, the window object is globally available and provides access to the localStorage API, which allows for storing and retrieving data in the browser’s storage.
// 	•	Non-Browser Environment: In environments like Node.js or server-side rendering, there is no window object. Attempting to access localStorage or other window properties will result in an error.

 if(typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }

}

export const ThemeContextProvider=({children})=>{

    const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };

    //   we are using local storage, to change this we use useEffect , so whenever theme changes we update the localstorage

      useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    
    return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}