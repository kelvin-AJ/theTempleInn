const weatherInfoMain = document.querySelector(".weather-info-main");
const curWeatherIcon = document.querySelector("#cur-weather-icon");
const forecastGrid = document.querySelector(".forecast-grid");

const apiLink = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&appid=2f8abfbca951d73dc1966185af2f0fea&units=imperial&exclude=hourly,minutely";


const fillCurWeather = function(current){
    curWeatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`);
    weatherInfoMain.innerHTML= `
                <div><span>Temperatue:</span><span>${current.temp} °F</span></div>
                <div><span>Description:</span><span>${current.weather[0].description}</span></div>
                <div><span>Humidity:</span><span>${current.humidity}%</span></div>`
};

const getNextDay = function(days=1){
    const daysArr = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const curDay = new Date().getDay();
    let nextDay = curDay + days;
    if(nextDay > 6){
        nextDay -= 7;
    };
    return daysArr[nextDay];
};

const fillForecastWeather = function(daily){
    for(let i = 1; i <= 3; i++){
        forecastGrid.insertAdjacentHTML("beforeend", 
        `
                <div class="forecast">
                    <span class="forecast-day dm-text">${getNextDay(i)}</span>
                    <img src="https://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png" class="forecast-icon" alt="${daily[i].weather[0].description} icon">
                    <span class="forecast-high">${Math.round(daily[i].temp.min)}°F</span>
                    <span class="forecast-low">${Math.round(daily[i].temp.max)}°F</span>
                </div>
        `);
    };
};

async function getWeather() {
    const weatherFetch = await fetch(apiLink);
    const json = await weatherFetch.json();
    fillCurWeather(json.current);
    fillForecastWeather(json.daily);
}
getWeather();