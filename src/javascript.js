function resultsDisplayed(response) {
  temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
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
