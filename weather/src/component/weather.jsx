import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/index";


import './weather.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const {  weatherData, error } = useSelector(
    (state) => state.weather
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div className="div1">
        <h1 className="h1">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <>
          <p>city:{city}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Wind Speed: {weatherData.wind.speed}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
        </>
      )}
    </div>
  );
};

export default Weather;