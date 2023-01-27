import { useState, useEffect } from "react";

const WeatherDesc = ({desc}) => {
    const [description, setDesc] = useState('')

    useEffect(() => {
        if (desc === 2 || desc === 3) {
            setDesc('Cloudy')
        }
        if (desc === 71 || desc === 73 || desc === 75 || desc === 85 || desc === 86 || desc === 77) {
            setDesc('Snow fall')
        }
        if (desc === 51 || desc === 53 || desc === 55) {
            setDesc('Drizzle')
        }
        if (desc === 56 || desc === 57) {
                setDesc('Freezing drizzle')
        }
        if (desc === 66 || desc === 67) {
            setDesc('Freezing rain')
    }
        if (desc === 0 || desc === 1) {
            setDesc('Clear sky')
        }
        if (desc === 61 || desc === 63 || desc === 65 || desc === 80 || desc === 81 || desc === 82) {
            setDesc('Rain')
        }
        if (desc === 95 || desc === 96 || desc === 99 ) {
            setDesc('Thunderstorm')
        }

    },[desc])


    return (
        description
    )
}

export default WeatherDesc;