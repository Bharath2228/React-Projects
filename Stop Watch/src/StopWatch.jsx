import React, {useState, useEffect, useRef} from 'react'

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false); // passing boolean
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime
        console.log(startTimeRef.current)
    }

    function stop(){
        setIsRunning(false)
        console.log(`Elapsed time: ${elapsedTime}`)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`
    }

    function padZero(number){
        return number.toString().padStart(2, "0")
    }

    return(
        <div className="stopWatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>
    );


}
export default StopWatch