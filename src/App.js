import React from "react";
import './App.css'
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      <h2>Lets build a whatasapp clone</h2>
      <div className="app__body">
        <Sidebar/>
        {/*chat*/}
        
      </div>
    </div>
  );
}

export default App;
