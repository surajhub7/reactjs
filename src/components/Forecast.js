import React from 'react';

function Forecast({ data }) {
  return (
    <div className="forecast">
      {data.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
          <img 
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
            alt="icon"
          />
          <p>{Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
