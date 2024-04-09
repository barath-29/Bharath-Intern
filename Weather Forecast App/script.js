function fetchWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'd7930df8508bdcd17ccfc1cd1d7da57f';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                var weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
            } else {
                alert(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            alert('An error occurred while fetching weather data.');
            console.error('Error:', error);
        });
}
