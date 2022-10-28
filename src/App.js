import React, { useState } from 'react';
import Axios from 'axios';





function App() {
  const [data ,setData]=useState({});
  const [location,setLocation]=useState('');

  const url=`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1014f4879ce9419b3a1057065a689865`

  const handlechange=(event)=>{
    setLocation(event.target.value);

  }

  const searchLocation=()=>{
    Axios.get(url).then((res)=>{
      setData(res.data)
    })

  }
  

  return (
    <div className="App">
      <div className='search'>
        <input value={location} onChange={handlechange} placeholder="Enter Location"/>
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main? <h1>{data.main.temp}°F</h1>:null}
            
          </div>
          <div className='description'>
            {data.weather? <p>{data.weather[0].main}</p>:null}
            
          </div>
        </div>

        {data.name !== undefined && 
        <div className='bottom'>
        <div className='feels'>
          {data.main? <p className='bold'>{data.main.feels_like}°F</p>:null}
          <p className='bold'>65</p>
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
          <p>Humidity</p>
        </div>
        <div className='wind'>
          {data.wind? <p className='bold'>{data.wind.speed}MPH</p>:null}
          
          <p>Wind Speed</p>
        </div>
      </div>
        
        }
        
      </div>
      

      

      
    </div>
  );
}

export default App;
