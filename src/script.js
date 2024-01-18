function showTemp(response) {
  let tempElement = document.querySelector(".todays-temp");
  let temp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = `${temp}°C`;
}

function search(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#cityInput");
  let city = currentCity.value;
  let h1 = document.querySelector("h1");
  if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
  }
  let apiKey = "b0ct14bcbb3obb233faba3e22b01a08b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hour = now.getHours();
let minute = now.getMinutes();
let day = days[now.getDay()];
let p = document.querySelector("#date");
if (minute < 10) {
  minute = `0${minute}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
date.innerHTML = `${day} ${hour}:${minute}`;

let form = document.querySelector("#city-search");
form.addEventListener("submit", search);
