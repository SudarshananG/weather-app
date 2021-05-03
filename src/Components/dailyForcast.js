import React from 'react';
import '../css/style.css';
import { Card, Button } from 'semantic-ui-react';
import moment from 'moment';

const refresh = () =>{
    window.location.reload();
}

const ExampleCard = ({ weatherData })=>(    
    <div className="main">
        <div className="main-container">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
            <div className="flex">
                <p className="day">{moment().format('ddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.current.weather[0].main}</p>
            </div>

            <div className="flex weather-icon">
                <img src={"http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + "@2x.png"}></img>
            </div>

            <div className="flex">
                <p className="temp">Temprature: {weatherData.current.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.current.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>    
    </div>
);

export default ExampleCard;