import React from "react";
import "./App.css";
import Nav from "./components/Nav"
import {Register} from "./components/Register"
import {About }from "./components/About"
import {LoggedOut} from "./components/LoggedOut"
import {Home} from "./components/Home"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router , Route, Routes } from "react-router-dom";


const App = () => {
 

  
  return (
  <Router>
    <div className="App">
    <Nav />
    <Routes>
    <Route  exact path="/"  element={<Home/>} />
    <Route path="/register"  element={<Register/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/logout" element={<LoggedOut/>} />
    
    </Routes>

   
    </div>
    
  </Router>

  );
};

export default App;


