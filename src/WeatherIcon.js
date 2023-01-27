
import React from "react";
import { useState, useEffect } from "react";
import { FaCloud, FaSun, FaSnowflake, FaCloudRain} from "react-icons/fa";


const WeatherIcon = ({desc}) => {
    const [icon, setIcon] = useState()

    useEffect(() => {
        if (desc === 2 || desc === 3 || desc === 45 || desc === 48 || desc === 95 || desc === 96 || desc === 99) {
            setIcon(<FaCloud/>)
        }
        if (desc === 71 || desc === 73 || desc === 75 || desc === 85 || desc === 86 || desc === 77) {
            setIcon(<FaSnowflake/>)
        }
        if (desc === 51 || desc === 53 || desc === 55) {
            setIcon(<FaCloudRain/>)
        }
        if (desc === 0 || desc === 1 ) {
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