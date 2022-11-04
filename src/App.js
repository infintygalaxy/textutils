import React, { useState } from 'react'

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
 
  Route,
  Link,
  Routes
} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

function App() {


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }






  return (
    <>
    
    <Router>
        <NavBar title="TEXT UTILITIES TOOL " />
        <Alert alert={alert} />
        <div className="container my-3">

        
          <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter Your Text Here"/>}></Route>
          </Routes>
        </div>
      </Router>
    </>   
  );
}

export default App;
