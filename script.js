



const apikey = "2a7ae69ce54500e7731bf913c5ed7d1d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const city = document.getElementById("city");
const searchbtn = document.getElementById("btn");
const weather = document.querySelector(".weather")
const invalid = document.querySelector(".invalid")
invalid.style.display = "none"

const weathercon = document.querySelector(".weather-con")
const bg = document.querySelector("body .img")




const checkweather = async (cityname) => {
    Response = await fetch(apiurl + cityname + "&appid=" + apikey);
    weatherdata = await Response.json();

    console.log(weatherdata);

    if (Response.status == 404) {
        invalid.style.display = "block"
        weather.style.display = "none"

    }
    else if (Response.status == 429) {
        invalid.innerHTML = "<p>Too many requests..please try later</p>"
        invalid.style.display = "block"
        weather.style.display = "none"

    }
    else {

        document.querySelector(".city").innerHTML = weatherdata.name
        document.querySelector(".temp").innerHTML = Math.round(weatherdata.main.temp) + " °C"
        document.querySelector(".hum").innerHTML = weatherdata.main.humidity + "%"
        document.querySelector(".w-s").innerHTML = weatherdata.wind.speed + " km/h"

        if (weatherdata.weather[0].main == "Clouds") {
            weathercon.src = "images/clouds.png"
            bg.src = "images/bg/clouds.jpg"
        }
        else if (weatherdata.weather[0].main == "Clear") {
            weathercon.src = "images/clear.png"
            bg.src = "images/bg/clear.jpg"

        }
        else if (weatherdata.weather[0].main == "Rain") {
            weathercon.src = "images/rain.png"
            bg.src = "images/bg/rain.jpg"

        }
        else if (weatherdata.weather[0].main == "Drizzle") {
            weathercon.src = "images/drizzle.png"
            bg.src = "images/bg/drizzle.jpg"

        }
        else if (weatherdata.weather[0].main == "Mist") {
            weathercon.src = "images/mist.png"
            bg.src = "images/bg/mist.jpg"

        }
        else if (weatherdata.weather[0].main == "Snow") {
            weathercon.src = "images/snow.png"
            bg.src = "images/bg/snow.jpg"

        }
        weather.style.display = "block"

        invalid.style.display = "none"


    }


    searchbtn.addEventListener("click", () => {
        checkweather(city.value);

    });
}



checkweather(city.value);