var cityNameEl = document.getElementById("city-name");
var weatherIconEl = document.getElementById("weather-icon");
var temperatureEl = document.getElementById("temperature");
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("UV-index");
var searchChar = document.getElementById("city-input")
var searchHistory = [];

var cityName = "Irvine";

var weatherApiUrl = "https://api.openweathermap.org";
var apiKey = "387c51dd523a8b61efaf47adae8b3466";

// for DOM


var searchHistorySection = document.getElementById("history");

var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&appid=" + apiKey + "&units=imperial";
var historyListEl = document.getElementById("history-list");
var historyFormEl = document.getElementById("search-form");
