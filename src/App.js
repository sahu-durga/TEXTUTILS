// import logo from './logo.svg';

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";






function App() {
  const [mode , setMode] = useState('light');  // whether dark mode is enable or not
  const [alert , setAlert] = useState(null);
  const [colour , setColour]= useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null)
    },2000)
  }
  const ybtn = ()=>{
    let cext = document.body.style.backgroundColor = '#80DEEA' ;
    setColour(cext)
    


  }
  const obtn = ()=>{
    let cext = document.body.style.backgroundColor = '#e28743';
    setColour(cext)
    


  }
  const rbtn = ()=>{
    let cext = document.body.style.backgroundColor = '#E57373';
    setColour(cext)
    


  }
  const gbtn = ()=>{
    let cext = document.body.style.backgroundColor = '#8BC34A';
    setColour(cext)
    


  }
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      
      showAlert("dark  mode has been enabled ", "Success")
      document.title = "enable-darkmode"
      // setInterval(()=>{
      //   document.title = "textutils is amazing"
      // },2000)

      // setInterval(()=>{
      //   document.title = "install textutils now"
      // },1500)
    
    }
    else{
      
        setMode('light');
        document.body.style.backgroundColor = "white"
      
        showAlert("light  mode has been enabled ", "success")
        document.title = "enable-lightmode"
      }
    

  }
  return (
    <>
    <BrowserRouter>
      
<Navbar title = "Textutilsss" mode={mode} toggleMode={toggleMode} colour = {colour} ybtn = {ybtn} obtn = {obtn} rbtn = {rbtn} gbtn={gbtn}  aboutText = "About Us"/>
<Alert alert = {alert}/>
{/* <Navbar /> */}
<div className="container my-3">
           <Routes>
          <Route exact path="/about"
            element={<About />}/>
          </Routes>
          <Routes>
          <Route axact path="/" element={
          <TextForm showAlert={showAlert} heading = "Enter the text analyze below " mode = {mode}/>}/>
          </Routes>
          
        
</div>
 
  </BrowserRouter>
  </>



  );
}

export default App;
