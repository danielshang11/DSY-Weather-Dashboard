
var weatherIconEl = document.getElementById("weather-icon");
var temperatureEl = document.getElementById("temperature");
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");

var searchChar = document.getElementById("city-input");


var weatherApiUrl = "https://api.openweathermap.org";
var apiKey = "387c51dd523a8b61efaf47adae8b3466";


var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchChar + "&appid=" + apiKey + "&units=imperial";
var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchChar + ",us&appid=" + apiKey + "&units=imperial";
var historyListEl = document.getElementById("history-list");
var historyFormEl = document.getElementById("search-form");

// add eventlistener that the function handleFormSubmit will work if user submit the city which must not to be blank.

document.addEventListener("submit",function handleFormSubmit(event) {
    event.preventDefault();
    // the container's car won't be shown unless user submit
    var pageStart = document.getElementById("container")
    pageStart.classList.remove("hide")
    
    var cityInput = searchChar.value;
    localStorage.setItem("CitySearched", JSON.stringify(cityInput));
    
    historyApend();
    getWeather(cityInput);
    // everytime user submits, clear the form
    document.getElementById("search-form").reset();
})
// make it append the button for the city search
function historyApend(){
    var cityInput = searchChar.value;
    if(!cityInput){
        window.alert("please enter city name!");
        return;
    }
    var historyListItemEl = document.createElement("button")
    
    historyListItemEl.innerHTML= cityInput;
  
    historyListItemEl.setAttribute("value", cityInput);
    historyListItemEl.setAttribute("class", "col-12 search-btn");
    historyListItemEl.setAttribute("id","history-btn");
   
    document.body.appendChild(historyListItemEl);
    historyListItemEl.addEventListener("click", function(){
        getWeather(historyListItemEl.value)
        console.log(historyListItemEl.value)
    })
    //  print to the page
    historyListEl.appendChild(historyListItemEl);
}

// this function will fetch twice for today and 5 days cuz in html file i make it into different section.
function getWeather(cityInput){
    var todayWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey + "&units=imperial";
    var fivedaysForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + ",us&appid=" + apiKey + "&units=imperial";
    
    fetch(todayWeatherUrl)
    .then(function(res){
      if (res !== 200) {
        return res.json();
      } else {
        alert('Error: ' + res.statusText);
      }
    })
    .then(function(data){
        
        document.getElementById("city-name").textContent = data.name;
        
        var dateArr = Date().split(" ");
        var day = dateArr[0];
        var month = dateArr[1];
        var date = dateArr[2];
        var year = dateArr[3];
        document.getElementById("today-date").textContent = day + ", " + month + " " + date + ", " + year;
        
        // icon needs to do separatly
        var icon = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        weatherIconEl.setAttribute("src", iconUrl);
        // give each info from fetch
        temperatureEl.textContent = data.main.temp;
        humidityEl.textContent = data.main.humidity;
        windSpeedEl.textContent = data.wind.speed;
        console.log(data)
    })

    fetch(fivedaysForecastUrl)
    .then(function(res){
        if (res !== 200) {
            return res.json();
          } else {
            alert('Error: ' + res.statusText);
          }       
    })
    .then(function(data){

        // day 1 
        
        var d1Date = data.list[3].dt_txt.split(" ")[0];
        document.getElementById("date1st").textContent=d1Date
        var d1Icon = data.list[3].weather[0].icon;
        var iconUrl1st = "http://openweathermap.org/img/wn/" + d1Icon + "@2x.png";
        document.getElementById("weather-icon1st").setAttribute("src", iconUrl1st);
        var d1temp = data.list[3].main.temp;
        document.getElementById("temperature1st").textContent = d1temp;
        var d1hu = data.list[3].main.humidity;
        document.getElementById("humidity1st").textContent = d1hu;
        var d1windS = data.list[3].wind.speed
        document.getElementById("wind-speed1st").textContent = d1windS;

        // day2
        
        var d2Date = data.list[11].dt_txt.split(" ")[0];
        document.getElementById("date2nd").textContent=d2Date;
        var d2Icon = data.list[11].weather[0].icon;
        var iconUrl2nd = "http://openweathermap.org/img/wn/" + d2Icon + "@2x.png";
        document.getElementById("weather-icon2nd").setAttribute("src", iconUrl2nd);
        var d2temp = data.list[11].main.temp;
        document.getElementById("temperature2nd").textContent = d2temp;
        var d2hu = data.list[11].main.humidity;
        document.getElementById("humidity2nd").textContent = d2hu;
        var d2windS = data.list[11].wind.speed
        document.getElementById("wind-speed2nd").textContent = d2windS;

        // day3
        
        var d3Date = data.list[19].dt_txt.split(" ")[0];
        document.getElementById("date3rd").textContent=d3Date;
        var d3Icon = data.list[19].weather[0].icon;
        var iconUrl3rd = "http://openweathermap.org/img/wn/" + d3Icon + "@2x.png";
        document.getElementById("weather-icon3rd").setAttribute("src", iconUrl3rd);
        var d3temp = data.list[19].main.temp;
        document.getElementById("temperature3rd").textContent = d3temp;
        var d3hu = data.list[19].main.humidity;
        document.getElementById("humidity3rd").textContent = d3hu;
        var d3windS = data.list[19].wind.speed
        document.getElementById("wind-speed3rd").textContent = d3windS;

        // day4
        var d4Date = data.list[27].dt_txt.split(" ")[0];
        document.getElementById("date4th").textContent = d4Date;
        var d4Icon = data.list[27].weather[0].icon;
        var iconUrl4th = "http://openweathermap.org/img/wn/" + d4Icon + "@2x.png";
        document.getElementById("weather-icon4th").setAttribute("src", iconUrl4th);
        var d4temp = data.list[27].main.temp;
        document.getElementById("temperature4th").textContent = d4temp;
        var d4hu = data.list[27].main.humidity;
        document.getElementById("humidity4th").textContent = d4hu;
        var d4windS = data.list[27].wind.speed
        document.getElementById("wind-speed4th").textContent = d4windS;

        // day5
        var d5Date = data.list[35].dt_txt.split(" ")[0];
        document.getElementById("date5th").textContent = d5Date;
        var d5Icon = data.list[35].weather[0].icon;
        var iconUrl5th = "http://openweathermap.org/img/wn/" + d5Icon + "@2x.png";
        document.getElementById("weather-icon5th").setAttribute("src", iconUrl5th);
        var d5temp = data.list[35].main.temp;
        document.getElementById("temperature5th").textContent = d5temp;
        var d5hu = data.list[35].main.humidity;
        document.getElementById("humidity5th").textContent = d5hu;
        var d5windS = data.list[35].wind.speed
        document.getElementById("wind-speed5th").textContent = d5windS;
    })
    .catch((error)=> console.error(error))
}