import React, { useState } from "react";
import "./weather.css";

const api = {
  key: process.env.REACT_APP_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [iconId, setIconId] = useState("");

  // Get Location
  const handleGetLocation = () => {
    setWeather("loading");
    if (navigator.geolocation) {
      const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            fetch(
              `${api.base}weather?lat=${lat}&lon=${long}&units=imperial&APPID=${api.key}`
            )
              .then((res) => res.json())
              .then((result) => {
                try {
                  setWeather(result);
                  setQuery("");
                  setIconId(result.weather[0].icon);
                } catch (e) {
                  setWeather("error");
                  console.log(e);
                }
              });
          },
          (error) => {
            setWeather("");
            alert("Need Location Access For Data");
            console.log("Need Location Access For Data");
          }
        );
      };
      getLocation();
    }
  };

  // Search Bar Input
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          try {
            setWeather(result);
            setQuery("");
            setIconId(result.weather[0].icon);
          } catch (e) {
            setWeather("error");
            console.log(e);
          }
        });
    }
  };

  // Get icons
  const getIcon = () => {
    switch (iconId) {
      case "01d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/01d.png")}
            alt="test"
          />
        );
      case "01n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/01n.png")}
            alt="test"
          />
        );
      case "02d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/02d.png")}
            alt="test"
          />
        );
      case "02n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/02n.png")}
            alt="test"
          />
        );
      case "03d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/03d.png")}
            alt="test"
          />
        );
      case "03n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/03n.png")}
            alt="test"
          />
        );
      case "04d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/04d.png")}
            alt="test"
          />
        );
      case "04n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/04n.png")}
            alt="test"
          />
        );
      case "09d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/09d.png")}
            alt="test"
          />
        );
      case "09n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/09n.png")}
            alt="test"
          />
        );
      case "10d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/10d.png")}
            alt="test"
          />
        );
      case "10n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/10n.png")}
            alt="test"
          />
        );
      case "11d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/11d.png")}
            alt="test"
          />
        );
      case "11n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/11n.png")}
            alt="test"
          />
        );
      case "13d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/13d.png")}
            alt="test"
          />
        );
      case "13n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/13n.png")}
            alt="test"
          />
        );
      case "50d":
        return (
          <img
            className="imgIcon"
            src={require("./icons/50d.png")}
            alt="test"
          />
        );
      case "50n":
        return (
          <img
            className="imgIcon"
            src={require("./icons/50n.png")}
            alt="test"
          />
        );
      default:
        return (
          <img
            className="imgIcon"
            src={require("./icons/unknown.png")}
            alt="test"
          />
        );
    }
  };

  const displayUndefinedWeather = () => {
    if (weather === "loading") {
      return <p>Loading...</p>;
    } else if (weather === "error") {
      return <p>Error occurred retrieving weather. Please try another city.</p>;
    } else return <p>Enter City or Get Location for Data</p>;
  };

  return (
    <div className="weather-app">
      <main className="weather-app-container">
        <div>
          <div className="weatherDataSearch">
            <input
              type="text"
              className="search-bar"
              placeholder="Search City..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            <button className="getLocationButton" onClick={handleGetLocation}>
              Get Location
            </button>
          </div>

          {/* Will display data if location is defined */}
          {typeof weather.main != "undefined" ? (
            <div className="weatherDataContainer">
              <div className="topContainer">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
              </div>
              <div className="middleContainer">
                <div className="rightContainer">
                  <div className="icon">{getIcon()}</div>

                  <div>
                    <div className="temp">
                      {Math.round(weather.main.temp)}
                      <span className="tempSymbol">ºF</span>
                    </div>
                  </div>
                </div>
                <div className="leftContainer">
                  <div className="leftContainerTop">
                    <div className="weather">
                      <div className="weatherTitle">Weather</div>
                      <div>{weather.weather[0].main}</div>
                    </div>
                    <div className="realFeel">
                      <div className="weatherTitle">Real Feel</div>
                      <div>
                        {Math.round(weather.main.feels_like)}
                        ºF
                      </div>
                    </div>
                  </div>
                  <div className="leftContainerBottom">
                    <div className="minMax">
                      <div className="weatherTitle">Low/High</div>
                      <div>
                        {Math.round(weather.main.temp_min)}/
                        {Math.round(weather.main.temp_max)}ºF
                      </div>
                    </div>
                    <div className="humidity">
                      <div className="weatherTitle">Humidity</div>
                      <div>{Math.round(weather.main.humidity)}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            displayUndefinedWeather()
          )}
        </div>
      </main>
    </div>
  );
}

export default Weather;
