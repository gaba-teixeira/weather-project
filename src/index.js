function changeCity(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-imput");
  let apiKey = "ab14t46ca824c44f19c53892o77f5c04";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue.value}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature-value");
  let city = document.querySelector("h1");

  city.innerHTML = response.data.city;

  temperatureElement.innerHTML = `${temperature}`;
}

function changeTime(date) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${day}, ${hour}:${minutes}`;
}

let city = document.querySelector("#city-form");
city.addEventListener("submit", changeCity);

let time = document.querySelector("#current-time");
let currentTime = new Date();

time.innerHTML = changeTime(currentTime);
