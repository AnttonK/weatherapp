
import React from "react";
import { useState, useEffect } from "react";
import WeatherDesc from "./WeatherDesc";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain, FaCloudDrizzle} from "react-icons/fa";


const WeatherIcon = ({desc}) => {
    const [icon, setIcon] = useState()

    useEffect(() => {
        if (desc === 2 || desc === 3) {
            setIcon(<FaCloud/>)
        }
        if (desc === 71 || desc === 73 || desc === 75 || desc === 85 || desc === 86 || desc === 77) {
            setIcon(<FaSnowflake/>)
        }
        if (desc === 51 || desc === 53 || desc === 55) {
            setIcon(<FaCloudRain/>)
        }
        if (desc === 0 || desc === 1) {
            setIcon(<FaSun/>)
        }
        if (desc === 61 || desc === 63 || desc === 65 || desc === 66 || desc === 67 || desc === 80 || desc === 81 || desc === 82) {
            setIcon(<FaCloudRain/>)
        }

    },[desc])

    return (
        icon
    )
}

    export default WeatherIcon;