import React, { useState, useEffect}  from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import WeatherThree from './WeatherThree'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  HashRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const Home = () => {

  return(
  <div>
    <h1>Weather app</h1> 
    <h3>Select city:</h3>
    <div className="buttons">
    <Link to="/cities/helsinki">
     <Button type="button">Helsinki</Button>
 </Link>
 <Link to="/cities/jyvaskyla">
     <Button type="button">Jyväskylä</Button>
 </Link>
 <Link to="/cities/tampere">
     <Button type="button">Tampere</Button>
 </Link>
 <Link to="/cities/turku">
     <Button type="button">Turku</Button>
 </Link>
 </div>
  </div>
  )
}




const App = () => {

  return (
    <Router>
     <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/cities/:city" element={<WeatherThree />} /> 
      <Route path="/citiesthree/:city" element={<WeatherThree />} /> 
     </Routes>
    </Router>
    
  )
}

export default App