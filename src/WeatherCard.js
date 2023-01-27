import React from "react";
import { useState, useEffect } from "react";
import WeatherDesc from "./WeatherDesc";
import axios from "axios";
import WeatherIcon from "./WeatherIcon"
import Card from 'react-bootstrap/Card';

const WeatherCard = ({city,date}) => {
        const [lat, setLat] = useState(null)
        const [lon, setLon] = useState(null)
        const [data, setData] = useState({})

     
    
    useEffect(() => {
    
        if (city === "jyvaskyla") { 
            setLat(62.24)
            setLon(23.23)
        }
    
        if (city === 'helsinki') {
            setLat(60.17);
            setLon(24.95);
        }
    
        if (city === 'tampere') {
            setLat(61.50);
            setLon(23.80);
        }
    
        if (city === 'turku') {
            setLat(60.45);
            setLon(22.27);
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
        <Card>
            <Card.Body>
            <WeatherIcon desc={data.daily ? data.daily.weathercode[date] : null}/>
            <WeatherDesc desc={data.daily ? data.daily.weathercode[date] : null}/>
            {data.daily ? <p>Temperature: {data.daily.temperature_2m_max[date]} C°</p> : null}
            </Card.Body>
        </Card> 
    )
}

export default WeatherCard;