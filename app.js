const apikey = '399eb07fa9ca6b3de1fe7bc710d93bbf';
async function fetchWeatherData(city) {


    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("unable to fetdch")
        }
const data = await response.json();
        console.log(data);
        updateWeatherUI(data);

    } catch (error) {
        console.error(error);
    }
}




const cityElement = document.querySelector(".city")
const temperature = document.querySelector(".temp")
const windspeed = document.querySelector(".wind-speed")
const humidity = document.querySelector(".humidity")
const visibility = document.querySelector(".visibility-distance")
const descriptionText = document.querySelector(".description-text")
const date = document.querySelector(".date")
const descriptionIcon = document.querySelector(".description i")




function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°`
    windspeed.textContent = `${data.wind.speed}Km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = ` ${data.visibility / 1000}km`
    descriptionText.textContent = data.weather[0].description;
    const currentData = new Date();
    date.textContent = currentData.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML =
        `<i class="material-icons">${weatherIconName}</i>`
}



const formElement = document.querySelector(".search-form")
const inputElement = document.querySelector(".city-input")
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = inputElement.value
    if (city !== '') {
        fetchWeatherData(city)
        inputElement.value = "";
    }
})



function getWeatherIconName(weatherCondition) {
    switch (weatherCondition) {
        case 'Clear':
            return 'wb_sunny';
        case 'Clouds':
            return 'wb_cloudy';
        case 'Rain':
            return 'umbrella';
        case 'Drizzle':
            return 'grain';
        case 'Thunderstorm':
            return 'flash_on';
        case 'Snow':
            return 'ac_unit';
        default:
            return 'wb_sunny'; // default icon
    }
}




function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°`;
    windspeed.textContent = `${data.wind.speed} Km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = `${data.visibility / 1000} km`;
    descriptionText.textContent = data.weather[0].description;
    const currentData = new Date();
    date.textContent = currentData.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;
}













