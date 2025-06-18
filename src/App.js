import React, { useState } from 'react';
import CurrentWeather from './components/currentWeather';
import Forecast from './components/Forecast';
import './App.css';


function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');

  const fetchWeatherData = async () => {
    const apiKey = 'd2bc8cc337fa07625f599a3077ac4d95';
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const currentRes = await fetch(currentUrl);
    const currentData = await currentRes.json();
    setWeather(currentData);

    const forecastRes = await fetch(forecastUrl);
    const forecastData = await forecastRes.json();
    setForecast(forecastData.list.filter((_, idx) => idx % 8 === 0)); // 5-day
  };

  return (
    <div className="app">
      <div className="search">
        <input 
          type="text" 
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>
      {weather && <CurrentWeather data={weather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
