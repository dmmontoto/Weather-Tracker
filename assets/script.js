$(function () {
    const apiKey = '4fdee25732925481fc0c3a270c0509a3';
    const testUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.95&lon=-118.38&appid=' + apiKey;
  
    async function getWeatherData() {
      try {
        const response = await fetch(testUrl);
        const data = await response.json();
  
        // Separate the five-day forecast and current weather data
        const fiveDayForecast = data.list; // An array of weather data for each 3-hour interval
        const currentWeather = data.list[0]; // Weather data for the current time

        // Extract and store weather data in variables
        var temperature = currentWeather.main.temp;
        const date = new Date(currentWeather.dt * 1000).toLocaleDateString();
        const location = data.city.name;
        const wind = currentWeather.wind.speed;
        const humidity = currentWeather.main.humidity;

        // Display weather data in the placeholders
        $('#Temp').text('Temp: ' + (1.8 * (temperature - 273) + 32) + ' °F');
        $('#Location-date').text(location + " " + date);
        $('#Wind').text('Wind: ' + wind + ' m/s');
        $('#Humidity').text('Humidity: ' + humidity + ' %');
        console.log("Testing");    
  
        console.log('Five-Day Forecast:', fiveDayForecast);
        console.log('Current Weather:', currentWeather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  
    // Call the function to fetch and display the weather data
    getWeatherData();
})
