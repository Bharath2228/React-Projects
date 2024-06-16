import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)
        
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    useEffect(() => {
        document.title = "Time: " + formatTime()
    }, [time])

    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
        const timeformat = `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridian}`;
        return timeformat;
    }

    function padZero(number){
       return (number < 10 ? "0" : "") + number;
    }

    return(
    <div className="clockContainer">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
    );
}
export default DigitalClock