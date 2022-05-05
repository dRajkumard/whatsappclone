import React from "react";
import './App.css'
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      <h2>Lets build a whatasapp clone</h2>
      <div className="app__body">
        <Sidebar/>
         <Chat/>
        
      </div>
    </div>
  );
}

export default App;
