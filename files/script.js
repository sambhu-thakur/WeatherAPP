
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    //console.log(Full_Url);
    let weatherPromise = fetch(Full_Url);
    return weatherPromise.then((response) => {
        // console.log(response.json());     
        return response.json();
    })

}
// console.log(getWeatherData("delhi"));

searchCity = () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    getWeatherData(city)
        .then((response) => {
            showWeatherData(response);
             // console.log(response.weather[0].description);
            //  console.log(`temprature of ${city} ` + response.main.temp);
            //  console.log(` minimum temprature of ${city} ` + response.main.temp_min);
            //  console.log(` minimum temprature of ${city} ` + response.main.temp_max);
        }).catch((error) => {
//             console.log(error);
        })
    // console.log(getWeatherData(city));
}
showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
    document.getElementById("weather-type").innerText = weatherData.weather[0].description;
}

// added jquery to slide up the wheather output
$(document).ready(function(){

$("#search").click(function(){ $("#weather-output").slideDown("slow");
});
});
