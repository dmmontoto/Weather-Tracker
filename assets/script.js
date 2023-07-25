$(function () {
    const apiKey = '4fdee25732925481fc0c3a270c0509a3';
    const testUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + apiKey;
  
    async function getWeatherData() {
      try {
        const response = await fetch(testUrl);
        const data = await response.json();
  
        // Separate the five-day forecast and current weather data
        const fiveDayForecast = data.list; // An array of weather data for each 3-hour interval
        const currentWeather = data.list[0]; // Weather data for the current time
  
        console.log('Five-Day Forecast:', fiveDayForecast);
        console.log('Current Weather:', currentWeather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  
    // Call the function to fetch and display the weather data
    getWeatherData();
})