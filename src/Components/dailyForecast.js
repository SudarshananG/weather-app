import React from 'react';
import '../css/style.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
const moment = extendMoment(Moment);

const refresh = () =>{
    window.location.reload();
}

function clickHandler(e){
    console.log(e.target.id);
}

function ModalExampleBasic(weatherData) {

    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={ <div className="daily-report-content"> {reportGenerator(weatherData)} </div>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
                We've found the following gravatar image associated with your e-mail
                address.
            </p>
            <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
            Nope
            </Button>
            <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
            />
        </Modal.Actions>
      </Modal>
    )
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
        <button id={index} key={index}>
            <div className="dayList" id={index} key={index} >
                <div className="days-block">
                    <p className="" >{ moment(list[index]._d).format('dddd') }</p>
                </div>
                <div className="weather-icon-block">
                    <p className=""><img className="weather-icon" src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}></img></p>
                </div>
                <div className="daynight-block">
                    <p className="" >Day: {data.temp['day']} &deg;C</p>
                    <p className="" >Night: {data.temp['night']} &deg;C</p>
                </div>
            </div>
        </button>
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
                {/* <div > */}
                    { ModalExampleBasic(weatherData) }
                {/* </div> */}
            </div>
        </div>
    </div>
    
);

export default DailyWeatherCard;