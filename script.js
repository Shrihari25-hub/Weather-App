const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
  const api_key = "5c5a7f16657d488985313b022a340420";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());


  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


  switch (weather_data.weather[0].main) {
    case 'Clouds':
      weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3X61se0WRDiK8mX5jnZxBQxcnFbNIesH7UcDfUZ_xNZghcckOVUKS65EgbDuxJff9-c&usqp=CAU";
      break;
    case 'Clear':
      weather_img.src = "https://s3-alpha.figma.com/hub/file/2803345406/df2a8280-b65b-49da-b706-bed599bf2e0b-cover.png";
      break;
    case 'Rain':
      weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL9bZSJfVK3uVVFFSWTdPmNwQhf_ZNwlvHQ3a1lpHJUVnSszWjtb1Fs0W8PDc9l2W8ZU&usqp=CAU";
      break;
    case 'Mist':
      weather_img.src = "https://media.istockphoto.com/id/1187864913/vector/weather-app-icon-of-light-mist.jpg?s=170667a&w=0&k=20&c=VsCekc_oNjZpzjO-jR0NKFs8zljO14eXl0hTv1JX4YE=";
      break;
    case 'Snow':
      weather_img.src = "https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg";
      break;

  }

  console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});
