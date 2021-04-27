import React from 'react';
import '../css/style.css';
import { Card, Button } from 'semantic-ui-react';
import moment from 'moment';

const refresh = () =>{
    window.location.reload();
}

const ExampleCard = ({ weatherData })=>(
    // <Card className="card-body-content">
    //     <Card.Content>
    //         <div className="top">
    //             <h3 className="header">{weatherData.name}</h3>
    //             <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
    //         </div>
    //         <p>Temperature: { weatherData.main.temp } &deg;C</p>
    //         <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
    //         <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
    //         <p>Description: {weatherData.weather[0].description}</p>
    //         <p>Humidity: {weatherData.main.humidity} %</p>
    //         <p>Day: {moment().format('dddd')}</p>
    //         <p>Date: {moment().format('LLL')}</p>
    //     </Card.Content>
    // </Card>

    <div className="main">
        <div className="main-container">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
            </div>

            <div className="flex">
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>    
  </div>
);

export default ExampleCard;