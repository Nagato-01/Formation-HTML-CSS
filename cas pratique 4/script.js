document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const input = document.getElementById('city-input');
    const result = document.getElementById('weather-result');

    const API_KEY = 'VOTRE_CLE_API';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = input.value.trim();
        if (city) {
            getWeather(city);
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            result.innerHTML = 'Erreur lors de la récupération des données météo.';
        }
    }

    function displayWeather(data) {
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        result.innerHTML = `
            <h2>Météo à ${data.name}</h2>
            <p>Température : ${temp}°C</p>
            <p>Description : ${description}</p>
            <p>Humidité : ${data.main.humidity}%</p>
            <p>Vitesse du vent : ${data.wind.speed} m/s</p>
        `;
    }
});