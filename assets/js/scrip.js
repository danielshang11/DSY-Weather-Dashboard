var cityNameEl = document.getElementById("city-name");
var weatherIconEl = document.getElementById("weather-icon");
var temperatureEl = document.getElementById("temperature");
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("UV-index");
var searchChar = document.getElementById("city-input").value;
var searchHistory = document.getElementById("history-list");
var searchFormEl = document.getElementById("search-form");


var weatherApiUrl = "https://api.openweathermap.org";
var apiKey = "387c51dd523a8b61efaf47adae8b3466";

// for DOM


var searchHistorySection = document.getElementById("history");

var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchChar + "&appid=" + apiKey + "&units=imperial";
var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchChar + ",us&appid=" + apiKey + "&units=imperial";
var historyListEl = document.getElementById("history-list");
var historyFormEl = document.getElementById("search-form");


console.log(searchChar)


var formSubmitHandler = function(event){
    event.preventDefault();
    
    if (searchChar){
        getTodaysWeather(searchChar);
        searchHistory.textContent="";
        searchChar.value = "";
    } else {
        alert("Please enter the City Name.");
    }
    console.log(searchChar)
}



var getTodaysWeather = function(city){
    var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchChar + "&appid=" + apiKey + "&units=imperial";
    fetch(todayWeatherUrl)
    .then(function(response){
        if(response){
            console.log(response);
            response.json()
        
        }
    }).then(function(data){
        console.log(data)
})
}



searchFormEl.addEventListener('submit', formSubmitHandler);



// document.addEventListener("submit",function showSearchHistory() {
//     searchCityHistory.innerHTML = '';
    
//     for (var i = 0; i < searchCityHistory.length - 1; i >= 0; i--) {
//       var button = document.createElement('button');
//       button.setAttribute('type', 'button');
//       // ADD CODE TO SET CLASSES OF BUTTON
//       button.setAttribute('data-citySearch', searchCityHistory[i]);
//       button.textContent = searchCityHistory[i];
//       searchCityHistory.append(button);
//     }
// })

// document.addEventListener("submit",function(event){
//     event.preventDefault();
//     fetch(todayWeatherUrl)
//     .then(function(res){
//         if(res.status != 200){
//             window.alert="please enter the city name!"
//             return res.json();
//         }
//     })
//     .then(function(data){
//         d
//     })

// })
