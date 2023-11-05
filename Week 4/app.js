//getting API key
const APIKey = 'f6b2eb3f2ea91d8b59df51a2efc12d87';

//creating variable to store inputs

const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weather-info');
const button = document.getElementById('btn');

//Adding event listener to the button to detect when it is clicked

button.addEventListener('click', () => {
    const cityName = cityInput.value.trim()

    if (cityName === ''){
        console.log('Please enter a city name. ');
    } else {
        //making an http request
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;

        $.get(apiURL, function(data) {
            const weatherDescription = data.weather[0].description;
            const mainTemperature = data.main.temp;
            const windSpeed = data.wind.speed;

            weatherInfo.innerHTML = `
            <p>Weather Description: ${weatherDescription}</p>
            <p>Main Temperature: ${mainTemperature}</p>
            <p>Wind Speed: ${windSpeed}</p>
            `;
        }).fail(function(error){
            console.error('Error:', error.status, error.statusText);
        });

        
    }

});

