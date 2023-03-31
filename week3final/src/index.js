let now = new Date();
let dateHeading = document.querySelector("#current-date");
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
dateHeading.innerHTML = `${date}.${month}.${year}`;
let timeHeading = document.querySelector("#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();
timeHeading.innerHTML = `${hours}:${minutes}`;

function showCurrentCity() {
  let currentCity = document.querySelector("#current-city");
let searchedCity = document.querySelector(".search");
  currentCity.innerHTML = searchedCity.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("click", showCurrentCity);
function celciusFah(){
  let celsius = document.querySelector("celsius");
  let fahrenheit = document.querySelector("fahrenheit");
  let currentWeather=document.querySelector("#degrees")
  celsius.innerHTML=
}