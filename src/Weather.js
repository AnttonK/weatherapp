import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import { Link, useParams } from "react-router-dom"
import WeatherCard from "./WeatherCard";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const WeatherThree = () => {
    const [cityName, setCityName] = useState('')
    const {city} = useParams();
    const [key, setKey] = useState('one');
 
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.`
    const tomorrow = new Date()
    tomorrow.setDate(current.getDate() +1)
    const date2 = `${tomorrow.getDate()}.${tomorrow.getMonth()+1}.`
    const twodays = new Date()
    twodays.setDate(current.getDate() +2)
    const date3 = `${twodays.getDate()}.${twodays.getMonth()+1}.`


useEffect(() => {

    if (city === "jyvaskyla") { 
        setCityName('Jyväskylä')
    }

    if (city === 'helsinki') {
        setCityName('Helsinki');
    }

    if (city === 'tampere') {
        setCityName('Tampere');
    }

    if (city === 'turku') {
        setCityName('Turku');
    }
},[city])

   

    return(
        <div>
            <h1>Weather in {cityName}</h1>
         <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="one" title="Today">
        <div className="todayCard">
            <p>{date}</p>
            <WeatherCard city={city} date={0}/>
        </div>
      </Tab>
      <Tab eventKey="two" title="Three days">
        <div className="cards">
        <div className="onecard">
            <p>{date}</p>
            <WeatherCard city={city} date={0}/>
        </div>
        <div className="onecard">
            <p>{date2}</p>
            <WeatherCard city={city} date={1}/>
        </div>
        <div className="onecard">
            <p>{date3}</p>
            <WeatherCard city={city} date={2}/>
        </div>
      </div>
      </Tab>
    </Tabs>
    <div className="buttons">
    <Link to="/">
                <Button className="backbutton" type="button">go back</Button>
        </Link>
        </div>
    </div>
    )
}

export default WeatherThree;