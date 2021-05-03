import React from 'react';
import '../css/style.css';
import { Button } from 'semantic-ui-react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
const moment = extendMoment(Moment);

let formatDate;
const refresh = () =>{
    window.location.reload();
}

function daysGenerator(){
    const start = moment();
    const end = moment().add(7, 'days');
    const range = moment.range(start, end);
    const arrayOfDates = Array.from(range.by('days'));
    return arrayOfDates;
}

function reportGenerator(weatherData){
    const list = daysGenerator();
    const report = weatherData.daily.map((data,index)=>(
        <div className="dayList" key={index}>
            <div className="days-block">
                <p className="" >{ moment(list[index]._d).format('dddd') }</p>
            </div>
            <div className="weather-icon-block">
                <p className="" ><img className="weather-icon" src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}></img></p>
            </div>
            <div className="daynight-block">
                <p className="" >Day: {data.temp['day']} &deg;C</p>
                <p className="" >Night: {data.temp['night']} &deg;C</p>
            </div>
        </div>
    ));
    return report;
}

const DailyWeatherCard = ({ weatherData })=>(
    
    <div className="main">
        <div className="main-container">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
            <div className="daily-report">
                <div className="daily-report-content">
                    { reportGenerator(weatherData) }
                </div>
            </div>
        </div>    
    </div>
);

export default DailyWeatherCard;