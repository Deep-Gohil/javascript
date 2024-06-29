const Mapper = (data) => {
    let weatherIcon = document.getElementById("weatherIcon");
    let cityName = document.getElementById("cityName");
    let temperature = document.getElementById("temperature");
    let temp = document.getElementById("temperaturee");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("windSpeed");
    cityName.innerHTML = data.name;
    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°`;
    temperaturee.innerHTML = `${Math.round(data.main.temp - 273.15)}°`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
}
const API = async (cityName) => {
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fbec3de2e0ae4b24f2653e65ce78b9f2&units=matric`)
    let response = await request.json()
    Mapper(response)
    console.log(response);
}
const dataInput = () =>{
    let cityName = document.getElementById("search").value 
    API(cityName)
}
document.getElementById("Search-Icon").addEventListener("click", dataInput)