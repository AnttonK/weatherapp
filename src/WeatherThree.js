import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import WeatherDesc from "./WeatherDesc";
import Weatherdaily from "./Weatherdaily";
import WeatherCard from "./WeatherCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain, FaCloudDrizzle} from "react-icons/fa";
import Cityview from "./Cityview";


const WeatherThree = () => {
    const [cityName, setCityName] = useState('')
    const {city} = useParams();
    const [key, setKey] = useState('one');
    console.log(city)
 
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
      <WeatherCard city={city} date={0}/>
      </Tab>
      <Tab eventKey="two" title="Three days">
       <p>{date}</p>
      <WeatherCard city={city} date={0}/>
      <p>{date2}</p>
      <WeatherCard city={city} date={1}/>
      <p>{date3}</p>
      <WeatherCard city={city} date={2}/>
      </Tab>
    </Tabs>
    <Link to="/">
                <Button type="button">go back</Button>
        </Link>
    </div>
    )
}

export default WeatherThree;