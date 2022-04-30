import CompA from "./components/CompA";

import { createContext } from "react";

const Context = createContext("");

const App = () => {

    let user = {
        name:"Sonal",
        course:"MERN",
        percentage:99
    }

    return (
      <Context.Provider value={ user }>

          <h1>Context API Demonstration!</h1>

          <hr />

          <CompA />

      </Context.Provider>
         
    )
}

export default App;

export {Context}; 
