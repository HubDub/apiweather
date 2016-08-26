"use strict";
console.log("weather.js is here");

let dom = require("./dom.js"),
  fb = require("./fb-interact.js"),
  wapi = require("./wapi-interact.js");

$(document).on("click", "#submitZip", function() {
  let zip = $("#textField").val();
  $("#textField").val("");
  console.log("on click", zip);
  validateZip(zip);
});

$("#textField").keyup( function(event){
  if (event.which === 13) {
    let zip = $("#textField").val();
    $("#textField").val("");
    console.log("on enter", zip);
    validateZip(zip);
  }
});


function validateZip(zip) {
  console.log("authorize zip", zip);
  if (zip === "") {
    window.alert("please type your 5 digit zip code");
  } else {
    if (zip.length !== 5) {
      window.alert("your zip should be five digits long");
    } else {
      wapi.getLocalWeather(zip)
        .then(function(weatherData) {
          console.log("sortWeather", weatherData);
          dom.localWeatherToDom(weatherData);
        });
    }
  }
}

function sortForecastWeather() {
  // wapi.getWeather(zip)
}