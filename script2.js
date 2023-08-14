let apiKey = "c18ceb3915b01441bae16dab247242e7";
let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?cnt=24&units=metric&q=";
let city2 = document.querySelector(".days input");
let searchforecast = document.querySelector(".search");
let setday = document.querySelector('.next_day_weather h2');
let setimg = document.querySelector('.next_day_weather img');
let settemp = document.querySelector('.next_day_weather h3');

let setday2 = document.querySelector('.next2_day_weather h2');
let setimg2 = document.querySelector('.next2_day_weather img');
let settemp2 = document.querySelector('.next2_day_weather h3');

let setday3 = document.querySelector('.next3_day_weather h2');
let setimg3 = document.querySelector('.next3_day_weather img');
let settemp3 = document.querySelector('.next3_day_weather h3');
let dayName = "";
let forecastList = "";
let forecast = "";
let forecastDate = "";
let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
let currentDate = "";


async function fetchWeatherData(city) {
    try {
        let response = await fetch(`${apiUrl}+${city}+&appid=${apiKey}`);
        let data = await response.json();

        forecastList = data.list;
        currentDate = new Date();
        let tomorrowIndex = forecastList.findIndex(forecast => {
            let forecastDate = new Date(forecast.dt * 1000);
            return forecastDate.getDate() !== currentDate.getDate();
        });

        for (let i = tomorrowIndex; i < tomorrowIndex + 3 * 8; i += 8) {
            forecast = forecastList[i];
            forecastDate = new Date(forecast.dt * 1000);

            dayName = days[forecastDate.getDay()];
            let dayIndex = (i - tomorrowIndex) / 8;

            if (dayIndex === 0) {
                setday.innerHTML = dayName;
                settemp.innerHTML = Math.round(forecast.main.temp) + "°C";
                setimg.src = getImageSourceForWeather(forecast.weather[0].main);
            } else if (dayIndex === 1) {
                setday2.innerHTML = dayName;
                settemp2.innerHTML = Math.round(forecast.main.temp) + "°C";
                setimg2.src = getImageSourceForWeather(forecast.weather[0].main);
            } else if (dayIndex === 2) {
                setday3.innerHTML = dayName;
                settemp3.innerHTML = Math.round(forecast.main.temp) + "°C";
                setimg3.src = getImageSourceForWeather(forecast.weather[0].main);
            }
            console.log(forecast);
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function getImageSourceForWeather(weatherMain) {
    let images = {
        "Clouds": "images/clouds.png",
        "Clear": "images/clear.png",
        "Rain": "images/rain.png",
        "Drizzle": "images/drizzle.png",
        "Mist": "images/mist.png",
        "Wind": "images/wind.png",
        "Snow": "images/snow.png"
    };

    return images[weatherMain] || "images/unknown.png";
}

searchforecast.addEventListener('click', () => {
    fetchWeatherData(city2.value);
});
