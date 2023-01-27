import React, { useState, useEffect}  from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import Cityview from './Cityview'
import Weatherdaily from './Weatherdaily'
import WeatherThree from './WeatherThree'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Routes, Route, Link, useParams
} from "react-router-dom"

const Home = () => {

  return(
  <div>
    <h1>Weather app</h1> 
    <h3>Select city:</h3>
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
     <div>hii se toimii</div>
    </Router>
    
  )
}

export default App