const axios = require('axios');

async function getWeatherByLocation(lat, lon) {
    const apiKey = 'API_KEY'; // my API key
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const res = await axios.get(url);
        const data = res.data;
        return reduceWeatherData(data);     
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
}

async function getWeatherByCity(city) {
    const apiKey = 'API_KEY';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const res = await axios.get(url);
        const data = res.data;
        return reduceWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
}

function reduceWeatherData(data) {
    return {
        city: data.name,
        temperature: data.main.temp,
        main: data.weather[0].main,
        description: data.weather[0].description
    };
}

module.exports = { getWeatherByLocation, getWeatherByCity}
