let apiKey = "c18ceb3915b01441bae16dab247242e7";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?E&cnt=24&units=metric&q=`;
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
let days = "";
let currentDate = "";
async function fetchWeatherData(city2) {
    try {
        let response = await fetch(`${apiUrl}+${city2}+&appid=${apiKey}`);
        let data = await response.json();


        forecastList = data.list;
        currentDate = new Date();

        for (let i = 0; i < forecastList.length; i += 8) {
            forecast = forecastList[i];
            forecastDate = new Date(forecast.dt * 1000);

            days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            
            
                
                setday.innerHTML = days[forecastDate.getDay() - 1];
                settemp.innerHTML = Math.round(data.list[0].main.temp)+ "°C";
                if (data.list[0].weather[0].main == "Clouds") {
                    setimg.src = "images/clouds.png";
                } else if (data.list[0].weather[0].main == "Clear") {
                    setimg.src = "images/clear.png";
                } else if (data.list[0].weather[0].main == "Rain") {
                    setimg.src = "images/rain.png";
                } else if (data.list[0].weather[0].main == "Drizzle") {
                    setimg.src = "images/drizzle.png";
                } else if (data.list[0].weather[0].main == "Mist") {
                    setimg.src = "images/mist.png";
                } else if (data.list[0].weather[0].main == "Wind") {
                    setimg.src = "images/wind.png";
                } else if (data.list[0].weather[0].main == "Snow") {
                    setimg.src = "images/snow.png";
                }
                


                setday2.innerHTML = days[forecastDate.getDay()];
                settemp2.innerHTML = Math.round(data.list[0].main.temp)+ "°C";
                if (data.list[0].weather[0].main == "Clouds") {
                    setimg2.src = "images/clouds.png";
                } else if (data.list[0].weather[0].main == "Clear") {
                    setimg2.src = "images/clear.png";
                } else if (data.list[0].weather[0].main == "Rain") {
                    setimg2.src = "images/rain.png";
                } else if (data.list[0].weather[0].main == "Drizzle") {
                    setimg2.src = "images/drizzle.png";
                } else if (data.list[0].weather[0].main == "Mist") {
                    setimg2.src = "images/mist.png";
                } else if (data.list[0].weather[0].main == "Wind") {
                    setimg2.src = "images/wind.png";
                } else if (data.list[0].weather[0].main == "Snow") {
                    setimg2.src = "images/snow.png";
                }
            


                setday3.innerHTML = days[forecastDate.getDay()+1];
                settemp3.innerHTML = Math.round(data.list[0].main.temp)+ "°C";
                if (data.list[0].weather[0].main == "Clouds") {
                    setimg3.src = "images/clouds.png";
                } else if (data.list[0].weather[0].main == "Clear") {
                    setimg3.src = "images/clear.png";
                } else if (data.list[0].weather[0].main == "Rain") {
                    setimg3.src = "images/rain.png";
                } else if (data.list[0].weather[0].main == "Drizzle") {
                    setimg3.src = "images/drizzle.png";
                } else if (data.list[0].weather[0].main == "Mist") {
                    setimg3.src = "images/mist.png";
                } else if (data.list[0].weather[0].main == "Wind") {
                    setimg3.src = "images/wind.png";
                } else if (data.list[0].weather[0].main == "Snow") {
                    setimg3.src = "images/snow.png";
                }
            console.log(dayName);
            console.log(data);

        }



    } catch (error) {
        console.error("Error fetching data:", error);
    }


}

searchforecast.addEventListener('click', () => {
    fetchWeatherData(city2.value);
})
