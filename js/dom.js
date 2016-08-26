"use strict";
console.log("dom.js is here");

function localWeatherToDom(weatherData) {
  console.log("localWeatherToDom", weatherData);
  $(".weatherContainer").append(`<div class="well weatherLocalContainer">
    <h3>Today's weather in: "${weatherData.name}"</h3>
    <h3>Today's High: "${weatherData.main.temp_max}"</h3>
    <h3>Today's Low: "${weatherData.main.temp_min}"</h3>
    <h3>Conditions: "${weatherData.weather[0].description}"</h3>
    <h3>Air Pressure: "${weatherData.main.pressure}"</h3>
    <h3>Wind Speed: "${weatherData.wind.speed}"</h3>
    </div><break><button id="localWeatherButton" class="btn">Local Weather</button><button id="threeDayForecastButton" class="btn">3 Day Forecast</button><button id="sevenDayForecastButton" class="btn">7 Day Forecast</button>`);
}

module.exports = {
  localWeatherToDom
};