import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [descr, setDescr] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(null);
  let [icon, setIcon] = useState(null);

  //temp is currently "null"
  //setTemp is function to chage the data inside useState

  // showWeather //
  function showWeather(response) {
    setLoaded(true);
    setTemp(response.data.main.temp);
    setDescr(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  // ** changeCity  setCity//
  function changeCity(event) {
    setCity(event.target.value);
  }

  // ** handleSubmit  -->  showweather//
  function handleSubmit(event) {
    event.preventDefault();
    let api = `https://api.openweathermap.org/data/2.5/weather`;
    let apiKey = `9656d85472f993f571de9d36d411cd1e`;
    let apiUrl = `${api}?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  // form  --> handleSubmit / chageCity//
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city.." onChange={changeCity} />
      <button type="submit"> Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="Weather">
          <li>Temp: {Math.round(temp)}°C</li>
          <li>Description: {descr}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt={descr} />
          </li>
        </ul>{" "}
      </div>
    );
  }

  if (loaded) {
    return <div className="WeatherSearch">{showWeather}</div>;
  } else {
    return form;
  }
}
