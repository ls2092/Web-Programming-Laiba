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

            const firstSentence = `The weather in  ${cityName} is ${weatherDescription}`;
            const secondSentence = `The temperature is ${mainTemperature} and the wind speed is ${windSpeed}`;
        
             //creating a div to hold current info so weather info stacks up instead of replacing the existing one 
            const cityWeatherDiv = document.createElement('div');

            cityWeatherDiv.innerHTML = `
            <p>${firstSentence}</p>
            <p>${secondSentence}</p>` ;

            /*  < p>Weather Description: ${weatherDescription}</p>
                <p>Main Temperature: ${mainTemperature}</p>
                <p>Wind Speed: ${windSpeed}</p>
            `;*/


            //appending new info to existing info

            weatherInfo.appendChild(cityWeatherDiv);
            

        }).fail(function(error){
            console.error('Error:', error.status, error.statusText);
        });

        
    }
});

