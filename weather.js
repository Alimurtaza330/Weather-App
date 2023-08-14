let city_name = document.querySelector(".city_name");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind");
let temperature = document.querySelector(".temperature");
let city=document.querySelector(".days input");


let search = document.querySelector(".search");
let country = document.querySelector(".country");
let weather_icon = document.querySelector(".weather_icon");


const api_key = "c18ceb3915b01441bae16dab247242e7";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


let getWeather = async (city) => {
  try {
    const response = await fetch(`${api_url}+${city}+&appid=${api_key}`);
    let weather = await response.json();
    temperature.innerHTML = Math.round(weather.main.temp) + "°C";
    city_name.innerHTML = weather.name;
    humidity.innerHTML = weather.main.humidity + "%";
    wind_speed.innerHTML = weather.wind.speed + "Km/h";
    country.innerHTML = weather.sys.country;

    if (weather.weather[0].main == "Clouds") {
      weather_icon.src = "images/clouds.png";
    } else if (weather.weather[0].main == "Clear") {
      weather_icon.src = "images/clear.png";
    } else if (weather.weather[0].main == "Rain") {
      weather_icon.src = "images/rain.png";
    } else if (weather.weather[0].main == "Drizzle") {
      weather_icon.src = "images/drizzle.png";
    } else if (weather.weather[0].main == "Mist") {
      weather_icon.src = "images/mist.png";
    } else if (weather.weather[0].main == "Wind") {
      weather_icon.src = "images/wind.png";
    } else if (weather.weather[0].main == "Snow") {
      weather_icon.src = "images/snow.png";
    }
    console.log(weather);

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};





search.addEventListener('click', ()=>{
  getWeather(city.value);
})

// getWeather(cityvalue"Islamabad");
