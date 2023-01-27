import React from "react";
import Weatherdaily from "./Weatherdaily";
import Citycard from "./WeatherCard";


const Cityview = ({data}) => {
    return(
        <section>
            <div className="cityview">
            <Citycard data={data}/>
            </div>
        </section>
    )
}

export default Cityview;