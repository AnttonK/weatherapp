import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import WeatherDesc from "./WeatherDesc";
import WeatherIcon from "./WeatherIcon";
import WeatherCard from "./WeatherCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain, FaCloudDrizzle} from "react-icons/fa";

const Weatherdaily = () => {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [cityName, setCityName] = useState('')
    const [data, setData] = useState({})

    const {city} = useParams();
 

useEffect(() => {

    console.log(city)
    if (city === "jyvaskyla") { 
        setLat(62.24)
        setLon(23.23)
        setCityName('Jyväskylä')
    }

    if (city === 'helsinki') {
        setLat(60.17);
        setLon(24.95);
        setCityName('Helsinki');
    }

    if (city === 'tampere') {
        setLat(61.50);
        setLon(23.80);
        setCityName('Tampere');
    }

    if (city === 'turku') {
        setLat(60.45);
        setLon(22.27);
        setCityName('Turku');
    }
},[city, lat, lon])

      useEffect(() => {
        axios
          .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max&timezone=auto`)
          .then(response => {
            setData(response.data)
          })
      },[lat,lon])
      
   

    return(
        <div>
    
        <Link to="/">
                <Button type="button">go back</Button>
        </Link>
        <WeatherCard city={city} date={0}/>
        <WeatherCard city={city} date={1}/>
        <WeatherCard city={city} date={2}/>
        </div>
    )
}

export default Weatherdaily;