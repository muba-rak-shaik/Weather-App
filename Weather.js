async function getWeather() {
    const apiKey = 'Enter Your API Here';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weather-info');
  
    if (cityInput) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`);
        const data = await response.json();
  
        if (data.cod === '404') {
          weatherInfo.innerHTML = '<p>City not found</p>';
        } else {
          const temperature = (data.main.temp - 273.15).toFixed(2);
          const windSpeed = data.wind.speed;
          const precipitation = data.weather[0].description;
  
          weatherInfo.innerHTML = `
            <h2>Weather in ${cityInput}:</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
            <p>Precipitation: ${precipitation}</p>
          `;
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Something went wrong. Please try again later.</p>';
      }
    } else {
      weatherInfo.innerHTML = '<p>Please enter a city name</p>';
    }
  }
  