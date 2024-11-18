"use client";

import React, { useState, useEffect } from 'react';


function CountdownTimer() {

  const [currentTime, setCurrentTime] = useState(new Date());

  const [targetDate, setTargetDate] = useState(new Date('2024-12-05T04:30:00')); // Target date and time


  useEffect(() => {

    const intervalId = setInterval(() => {

      setCurrentTime(new Date());

    }, 1000);


    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks

  }, []);


  const getTimeRemaining = () => {

    const totalTime = targetDate - currentTime;

    const seconds = Math.floor((totalTime / 1000) % 60);

    const minutes = Math.floor((totalTime / (1000 * 60)) % 60);

    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);

    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));


    return {

      days,

      hours,

      minutes,

      seconds,

    };

  };


  const { days, hours, minutes, seconds } = getTimeRemaining();


  return (

    <div className='countdown-timer'>
      
      <div className="timer-container highlight py-5 text-lg">
        {days > 0 && (
          <div className="timer-item bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
            <span className='text-5xl'>{days}</span>
            <div className='text-green-600'>Days</div>
          </div>
        )}
        {hours > 0 && (
          <div className="timer-item bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
            <span className='text-5xl'>{hours.toString().padStart(2, '0')}</span>
            <div className='text-green-600'>Hours</div>
          </div>
        )}
        <div className="timer-item bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
          <span  className='text-5xl'>{minutes.toString().padStart(2, '0')}</span>
          <div className='text-green-600'>Minutes</div>
        </div>
        <div className="timer-item bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
          <span  className='text-5xl'>{seconds.toString().padStart(2, '0')}</span>
          <div className='text-green-600'>Seconds</div>
        </div>
      </div>
    </div>

  );

}


export default CountdownTimer;