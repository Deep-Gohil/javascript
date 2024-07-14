const Mapper = (data) => {
    let weatherIcon = document.getElementById("weatherIcon");
    let cityName = document.getElementById("cityName");
    let temperature = document.getElementById("temperature");
    let temp = document.getElementById("temperaturee");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("windSpeed");
    cityName.innerHTML = data.name;
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    // humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
}

const API = async (query, isCity = true) => {
    let url = isCity
        ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=fbec3de2e0ae4b24f2653e65ce78b9f2&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=fbec3de2e0ae4b24f2653e65ce78b9f2&units=metric`;
    let request = await fetch(url);
    let response = await request.json();
    Mapper(response);
    console.log(response);
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            API({lat, lon}, false);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

const dataInput = () => {
    let cityName = document.getElementById("search").value;
    API(cityName);
}

document.getElementById("Search-Icon").addEventListener("click", dataInput);    
window.addEventListener("load", getLocation);
