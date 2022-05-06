import React from "react";
import './App.css'
import Sidebar from "./Sidebar";
import Chat from "./Chat";
// import { Switch } from "@mui/material";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <h2>Lets build a whatasapp clone</h2>
      <div className="app__body">
        <Router>
      <Switch>
        <Route path ="#/app">
        <Sidebar/>
         <Chat/>
        </Route>
        <Route path ='#/'>
          <h1>HomeScreen</h1>
          </Route>
        
         </Switch>
         </Router>

      </div>
    </div>
  );
}

export default App;
