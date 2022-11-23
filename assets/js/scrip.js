
var weatherIconEl = document.getElementById("weather-icon");
var temperatureEl = document.getElementById("temperature");
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("UV-index");


var searchChar = document.getElementById("city-input");
var searchHistory = document.getElementById("history-list");
var searchFormEl = document.getElementById("search-form");


var weatherApiUrl = "https://api.openweathermap.org";
var apiKey = "387c51dd523a8b61efaf47adae8b3466";

// for DOM
var searchedHistory = [];


// var searchHistorySection = document.getElementById("history");

var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchChar + "&appid=" + apiKey + "&units=imperial";
var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchChar + ",us&appid=" + apiKey + "&units=imperial";
var historyListEl = document.getElementById("history-list");
var historyFormEl = document.getElementById("search-form");


document.addEventListener("submit",function handleFormSubmit(event) {
    event.preventDefault();
  
    var cityInput = searchChar.value;
    var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey + "&units=imperial";
    var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + ",us&appid=" + apiKey + "&units=imperial";

    localStorage.setItem("CitySearched", JSON.stringify(cityInput));
    getSearched();
    historyApend();
    getWeather();
    
    document.getElementById("search-form").reset();
})

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}



function getSearched(){
    var cityInput = searchChar.value;
    var citySearched = JSON.parse(localStorage.getItem(""))


    if (localStorage.getItem("cities") !== null) {
    citySearched = JSON.parse(localStorage.getItem("cities"));
    historyApend();
    } else {
    citySearched = [];
    console.log(citySearched)
}
}

function historyApend(){
    var cityInput = searchChar.value;
    if(!cityInput){
        window.alert("please enter city");
        return;
    }
    var historyListItemEl = document.createElement("button")
    
    historyListItemEl.innerHTML= cityInput;
    historyListItemEl.setAttribute("type", "button");
    historyListItemEl.setAttribute("value", "searchChar");
    historyListItemEl.setAttribute("class", "col-12");
     document.body.appendChild(historyListItemEl);
 
    // print to the page
    historyListEl.append(historyListItemEl);
}



function getWeather(){
    var cityInput = searchChar.value;
    var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey + "&units=imperial";
    var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + ",us&appid=" + apiKey + "&units=imperial";

    fetch(todayWeatherUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        document.getElementById("city-name").textContent = data.name;
        temperatureEl.textContent = data.main.temp;
        humidityEl.textContent = data.main.humidity;
        windSpeedEl.textContent = data.wind.speed;
        console.log(data)


    })
}

// var formSubmitHandler = function(event){
//     event.preventDefault();
    
//     if (searchChar){
//         getTodaysWeather(searchChar);
//         searchHistory.textContent="";
//         searchChar.value = "";
//     } else {
//         alert("Please enter the City Name.");
//     }
//     console.log(searchChar)
// }


// var getTodaysWeather = function(cityname){
//     var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchChar + "&appid=" + apiKey + "&units=imperial";
//     fetch(todayWeatherUrl)
//     .then(function(response){
//         if(response.status === 404){
//             alert("no data found, please try again")
//             return
//         }
        
//         console.log(response)
//         return response.json();
//     }).then(function(data){
//         console.log(data)
//         var historyListItemEl = document.createElement("button")
    
//     historyListItemEl.setAttribute("type", "button");
//     historyListItemEl.setAttribute("value", "searchChar");
//     historyListItemEl.setAttribute("class", "col-12");
//      document.body.appendChild(historyListItemEl);
  
    
  
//     // print to the page
//     historyListEl.append(historyListItemEl);
  
//     // clear the form input element
//     // 
//     document.getElementById("search-form").reset();
// })
// }



// searchFormEl.addEventListener('submit', getTodaysWeather);



// document.addEventListener("submit",function showSearchHistory() {
//     searchCityHistory.innerHTML = '';
    
//     for (var i = 0; i < searchCityHistory.length - 1; i >= 0; i--) {
//       var button = document.createElement('button');
//       button.setAttribute('type', 'button');
//      
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
