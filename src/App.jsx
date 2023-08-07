/* eslint-disable no-unused-vars */

import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/app"
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';

import {BsMoon, BsFillMoonFill} from "react-icons/bs"
import { useState } from 'react';



function App() {

  const[currentMode, SetCurrentMode] = useState(false);
  let x =0;


  function changeMode(){
    if(x%2==0){
      document.getElementById("dark-mode").style.opacity= "1";
      document.getElementById("day-mode").style.opacity= "0";
  }
    else{
      document.getElementById("dark-mode").style.opacity= "0";
      document.getElementById("day-mode").style.opacity= "1";
    }
    x++;
    console.log(x);
  }

  let videoMy= "./public/myVideo3.mov";


  return (
    <>
    <div className='dark-mode-btn'>
      <button onClick={changeMode}>
        <BsMoon id='dark-mode' />
        <BsFillMoonFill id='day-mode'/>
      </button>
    </div>
    <video autoPlay muted loop id="background-video">
      <source src={videoMy} type="video/mp4" />
    </video>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
