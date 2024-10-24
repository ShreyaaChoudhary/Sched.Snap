import React, { useState, useEffect } from "react";
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState({
    hours: ["0", "0"],
    minutes: ["0", "0"],
    period: "AM"
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes().toString();
      const period = hours >= 12 ? "PM" : "AM";

      hours = hours > 12 ? `${Math.max(12, hours) - Math.min(12, hours)}` : hours.toString();
      hours = hours.padStart(2, "0").split("");

      minutes = minutes.padStart(2, "0").split("");

      setTime({ hours, minutes, period });
    };

    const initialSync = (60 - new Date().getSeconds()) * 1000;

    setTimeout(() => {
      updateClock();
      setInterval(() => {
        updateClock();
      }, 60000);
    }, initialSync);

    updateClock();

    return () => clearInterval(initialSync);
  }, []);

  return (
    <div className="main flex-x flex-center">
      <div id="timer" className="flex-x flex-center">
        <div className="hours flex-x">
          <span className="flip" id="hour-left">{time.hours[0]}</span>
          <span className="flip" id="hour-right">{time.hours[1]}</span>
        </div>
        <span className="material-symbols-rounded">&nbsp;&nbsp;</span>
        <div className="minutes flex-x">
          <span className="flip" id="minute-left">{time.minutes[0]}</span>
          <span className="flip" id="minute-right">{time.minutes[1]}</span>
        </div>
      </div>
      <p id="am-pm">{time.period}</p>
    </div>
  );
};

export default Clock;
