import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={< Login/>}/>
      <Route path="/" element = {<Home/>} />
      
 
    </Routes>
    </BrowserRouter>
    </>
  );
}
 export default App;