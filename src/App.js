import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './Components/currentForcast';
import DailyForcast from './Components/dailyForcast';
import { Dimmer, Loader } from 'semantic-ui-react';

require('dotenv').config()

function App() {

  const[lat, setLat] = useState([]);
  const[long, setLong] = useState([]);
  const[data, setData] = useState([]);
  const[dailyData, setDailyData] = useState([]);

  useEffect(() => {
    var tempObj = {};
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        tempObj = result
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        tempObj.name = result.name;
        console.log(tempObj);
      });
      setData(tempObj)
    }
    fetchData();
  }, [lat,long]);

  return (
    <div className="App">
      <div className="curr-forcast">
        {(typeof data.name != 'undefined') ? (
          <Weather weatherData= {data} />
        ):(
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
