$(function () {
    const apiKey = '4fdee25732925481fc0c3a270c0509a3';
    const testUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.95&lon=-118.38&appid=' + apiKey;
  
    async function getWeatherData() {
      try {
        const response = await fetch(testUrl);
        const data = await response.json();
  
        // get the date
        var today = dayjs();

        // Separate the five-day forecast and current weather data
        const fiveDayForecast = data.list; // An array of weather data for each 3-hour interval
        const currentWeather = data.list[0]; // Weather data for the current time

        // Extract and store weather data in variables
        var temperature = currentWeather.main.temp;
        // K to F
        temperature = (1.8 * (temperature - 273) + 32);
        var date = today.format('(MM/DD/YYYY)');
        var location = data.city.name;
        var wind = currentWeather.wind.speed;
        // m/s to mph
        wind = (wind / 1609) * 3600;
        var humidity = currentWeather.main.humidity;

        // Display today's weather data in the placeholders
        $('#Temp').text('Temp: ' + temperature.toFixed(2) + ' °F');
        $('#Location-date').text(location + " " + date);
        $('#Wind').text('Wind: ' + wind.toFixed(2) + ' mph');
        $('#Humidity').text('Humidity: ' + humidity + ' %');

        // Extract and store data for weather for next five days
        const day1Weather = data.list[7];
        const day2Weather = data.list[16];
        const day3Weather = data.list[23];
        const day4Weather = data.list[31];
        const day5Weather = data.list[39];

        // DAY 1 (Tomorrow)
        var temp1 = day1Weather.main.temp;
        temp1 = (1.8 * (temp1 - 273) + 32);
        var day1 = today.add(1, 'day');
        var date1 = day1.format('(MM/DD/YYYY)');
        var wind1 = day1Weather.wind.speed
        wind1 = (wind1 / 1609) * 3600;
        var humidity1 = day1Weather.main.humidity;
        
        $('#Temp1').text('Temp: ' + temp1.toFixed(2) + ' °F');
        $('#Date1').text(date1);
        $('#Wind1').text('Wind: ' + wind1.toFixed(1) + ' mph');
        $('#Humidity1').text('Humidity: ' + humidity1 + ' %');

        // DAY 2
        var temp2 = day2Weather.main.temp;
        temp2 = (1.8 * (temp2 - 273) + 32);
        var day2 = today.add(2, 'day');
        var date2 = day2.format('(MM/DD/YYYY)');
        var wind2 = day2Weather.wind.speed
        wind2 = (wind2 / 1609) * 3600;
        var humidity2 = day2Weather.main.humidity;
        
        $('#Temp2').text('Temp: ' + temp2.toFixed(2) + ' °F');
        $('#Date2').text(date2);
        $('#Wind2').text('Wind: ' + wind2.toFixed(1) + ' mph');
        $('#Humidity2').text('Humidity: ' + humidity2 + ' %');

        // DAY 3
        var temp3 = day3Weather.main.temp;
        temp3 = (1.8 * (temp3 - 273) + 32);
        var day3 = today.add(3, 'day');
        var date3 = day3.format('(MM/DD/YYYY)');
        var wind3 = day3Weather.wind.speed
        wind3 = (wind3 / 1609) * 3600;
        var humidity3 = day3Weather.main.humidity;
        
        $('#Temp3').text('Temp: ' + temp3.toFixed(2) + ' °F');
        $('#Date3').text(date3);
        $('#Wind3').text('Wind: ' + wind3.toFixed(1) + ' mph');
        $('#Humidity3').text('Humidity: ' + humidity3 + ' %');

        // DAY 4
        var temp4 = day4Weather.main.temp;
        temp4 = (1.8 * (temp4 - 273) + 32);
        var day4 = today.add(4, 'day');
        var date4 = day4.format('(MM/DD/YYYY)');
        var wind4 = day4Weather.wind.speed
        wind4 = (wind4 / 1609) * 3600;
        var humidity4 = day4Weather.main.humidity;
        
        $('#Temp4').text('Temp: ' + temp4.toFixed(2) + ' °F');
        $('#Date4').text(date4);
        $('#Wind4').text('Wind: ' + wind4.toFixed(1) + ' mph');
        $('#Humidity4').text('Humidity: ' + humidity4 + ' %');

        // DAY 5
        var temp5 = day5Weather.main.temp;
        temp5 = (1.8 * (temp5 - 273) + 32);
        var day5 = today.add(5, 'day');
        var date5 = day5.format('(MM/DD/YYYY)');
        var wind5 = day5Weather.wind.speed
        wind5 = (wind5 / 1609) * 3600;
        var humidity5 = day5Weather.main.humidity;
        
        $('#Temp5').text('Temp: ' + temp5.toFixed(2) + ' °F');
        $('#Date5').text(date5);
        $('#Wind5').text('Wind: ' + wind5.toFixed(1) + ' mph');
        $('#Humidity5').text('Humidity: ' + humidity5 + ' %');

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  
    // Call the function to fetch and display the weather data
    getWeatherData();
})
