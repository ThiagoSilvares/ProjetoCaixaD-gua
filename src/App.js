import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import Home from "./Home";
import Profile from "./Sidebar/Profile";
import Chart1 from "./Sidebar/Chart1";
import Chart2 from "./Sidebar/Chart2";
import Chart3 from "./Sidebar/Chart3";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

<div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/chart1" element={<Chart1 />} />
        <Route path="/chart2" element={<Chart2 />} />
        <Route path="/chart3" element={<Chart3 />} />
      </Routes>
    </Router>
</div>
 
    
  );

  
}

export default App;
