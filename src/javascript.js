function resultsDisplayed(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let date = new Date(response.data.time * 1000);

  console.log(response.data);

  date.innerHTML = dateFormat(date);
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}
function dateFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours};${minutes}`;
}

function searchCity(city) {
  let apiKey = "60at455d3d23aedc50eab463bf1f843o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(resultsDisplayed);
}

function displayTemperature(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-form");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayTemperature);

searchCity("Lisbon");
