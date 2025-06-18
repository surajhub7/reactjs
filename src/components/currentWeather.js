import React from 'react';

function CurrentWeather({ data }) {
  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <div className="icon-temp">
        <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt="icon"
        />
        <span className="temp">{Math.round(data.main.temp)}°C</span>
      </div>
      <div className="min-max">
        {Math.round(data.main.temp_min)}° / {Math.round(data.main.temp_max)}°
      </div>
      <p className="condition">{data.weather[0].description}</p>
    </div>
  );
}

export default CurrentWeather;
