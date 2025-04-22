import { useState } from "react";
import InfoBox from "./src/InfoBox";
import SearchBox from "./src/SearchBox";

function WeatherApp(){

    const[weatherInfo,setWeatherInfo]=useState({
        
        city:"deddlhi",
        temp:25.4,
        tempMin:23.3,
        tempMax:25.2,
        humidity:48,
        weather:"haze",
        feels_like:24.04,
    })

    let updateInfo=(result)=>{

      setWeatherInfo(result);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}

export default WeatherApp;