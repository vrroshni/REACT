import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const[mode,changemode]=useState('light')
  const[colortext,changecolortext]=useState('dark')
  const togglemode=()=>{
    if (mode==='light'){
    changemode('dark')
    changecolortext('light')
    document.body.style.backgroundColor='black'
    }
    else{
      changemode('light')
      changecolortext('dark')
      document.body.style.backgroundColor='white'
  }
}

  return (
    <>
      <Navbar title1="Convert" title2="About Us" mode={mode} togglemode={togglemode} colortext={colortext} />
      <Alert alert="this is alert"/>
      <TextForm mode={mode}/>
     
    </>
  );
}

export default App;
