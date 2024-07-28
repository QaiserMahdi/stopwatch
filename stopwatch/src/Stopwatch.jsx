import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(null);
    const timeRef = useRef(null);

    const handleStartPause = () => {
        if (isTimeRunning) {
            clearInterval(timeRef.current);
        } else {
            setElapsedTime(null);
            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        setIsTimeRunning(!isTimeRunning);
    };

    const handleStop = () => {
        clearInterval(timeRef.current);
        setIsTimeRunning(false);
        setElapsedTime(time);
        setTime(0);
    };

    const handleReset = () => {
        clearInterval(timeRef.current);
        setIsTimeRunning(false);
        setTime(0);
        setElapsedTime(null);
    };
    console.log(elapsedTime);

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="stopwatch">
                <div className="display">
                    {new Date(time * 1000).toISOString().substr(11, 8)}
                </div>
                <div className="buttons">
                    <button className="start" onClick={handleStartPause}>{isTimeRunning ? 'Pause' : 'Start'}</button>
                    <button className="stop" onClick={handleStop}>Stop</button>
                    <button className="reset" onClick={handleReset}>Reset</button>
                </div>
                {elapsedTime !== null && elapsedTime > 0 && (
                    <div className="elapsed-time">
                        Elapsed Time: {new Date(elapsedTime * 1000).toISOString().substr(11, 8)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Stopwatch;
