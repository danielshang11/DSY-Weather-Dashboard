var cityNameEl = document.getElementById("city-name");
var weatherIconEl = document.getElementById("weather-icon");
var temperatureEl = document.getElementById("temperature");
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("UV-index");
var searchChar = document.getElementById("city-search")


var apiKey = "387c51dd523a8b61efaf47adae8b3466";


function renderHistory(){

}



function getCityName(){
    var citySearch = charInput.value;
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch;
    fetch (requestUrl)
    .then (function(res){
        return res.json();
    })
    .then (funcion(data){
        var character = data.result[0]

        cityNameEl.textContent= character.city
        weatherIconEl.textContent= character.
        temperatureEl.textContent= character.tempF
        windSpeedEl.textContent= character.windMph
        humidityEl.textContent= character.humidity
        uvEl.textContent= character.uvindex
    })
}
console.log(getCityName);

searchChar.addEventListener("click", getCityName);