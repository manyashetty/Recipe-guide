import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element={< Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
 export default App;