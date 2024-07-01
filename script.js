document.getElementById('location-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const location = document.getElementById('location-input').value;
  if (location) {
      fetchWeatherData(location);
  }
});

function fetchWeatherData(location) {
  const apiKey = '771a5b9f7fd8356ae4ea70be4a8624e4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => displayWeatherData(data))
      .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeatherData(data) {
  if (data.cod === '404') {
      alert('Location not found');
      return;
  }

  document.getElementById('location-name').textContent = data.name;
  document.getElementById('weather-description').textContent = data.weather[0].description;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

  document.getElementById('weather-data').classList.remove('hidden');
}
