"use strict";


console.log("wapi-interact.js is here");

function getLocalWeather(zip) {
  console.log("loadWeather", zip);
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=56ea31fafaf9ace4a2226322903a2a1b&units=imperial`
    }).done(function(weatherData) {
      console.log("inside loadWeather", weatherData);
      resolve(weatherData);
    });
  });
}

module.exports = {
  getLocalWeather
};

