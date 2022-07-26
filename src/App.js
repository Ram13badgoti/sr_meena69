import React from 'react';
import Navbar from './Components/Navbar'
import {  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import About from './Components/About';

import Contact from './Components/Contact';
import Project from './Components/Project';
import Skills from "./Components/Skills.jsx"
import "./Style/index.css"
import "./Style/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  AOS.init({ duration: 2000 });
  return (
    <>
    
  <Navbar/>

     <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path='/About' element={<About/>}/>
         <Route exact path='/Project' element={<Project/>} /> 
          <Route exact path='/Skills' element={<Skills/>} />
          <Route exact path='/Contact'element={<Contact/>} />
       
      </Routes>
    
   </>
    
     
      

 
  )
}

export default App
