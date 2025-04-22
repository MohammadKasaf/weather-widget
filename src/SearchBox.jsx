import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="e4d21d418fa9c88df74ffe87ab614aef";

    let getWeatherInfo= async ()=>{

       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
         console.log(jsonResponse);

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description,
            feels_like:jsonResponse.main.feels_like,
        };

        console.log(result);
        return result;
       }
       catch(err){
          throw error;
       }
    }

    let handleChange=(event)=>{
         
        setCity(event.target.value);
        setError(false);

    };

    let handleSubmit=async (event)=>{
        
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
      }
      catch(err){
         setError(true);
      }
    };

    return(
    
  <div className='SearchBox'>

    <h1 style={{color:"black"}}>Search for the weather</h1>

    <form onSubmit={handleSubmit}>
     <TextField id="city" label="city name" variant="outlined" required value={city}  onChange={handleChange}/>
     <br /><br />
     <Button variant="contained" type="submit">Search</Button> 
     {error && <p style={{color:"white"}}>No such place exists</p>}
    </form>
  </div>

    )
}

export default SearchBox;