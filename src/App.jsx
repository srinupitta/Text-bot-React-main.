import './App.css' 
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextBox from './components/TextBot'
import React, { useState } from 'react'
import About from './components/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(){
  const[mode,setMode] = useState('light');
  
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 500);
  }
    const toggleMode = ()=>{
    if(mode==='light'){
      document.body.style.backgroundColor = '#031b3f';
      setMode('dark')
      showAlert("Dark Mode Enabled","success")
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light')
      showAlert("Light Mode Enabled","success")
    }
  }
  return(
    <>
   <Router>
   <Navbar title="TextBot" aboutUs="About" toggleMode={toggleMode} mode={mode}/>
   <Alert alert={alert}/>
   {/* <div className="conatiner" > */}
    <Switch>
      <Route  exact path='/about'>
        <About mode={mode}/>
      </Route>
      <Route exact path='/'>  {/* WIthot exact it will do a partial check */}
      <TextBox showAlert={showAlert} heading="Enter the text to enter:" mode={mode}/>
      </Route>
    </Switch>
   {/* </div>  */}
   </Router>
   </>
  )
}
export default App