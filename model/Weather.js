const apiKey = "a99421de368af0c3c57cba160d978e4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather(city){
    const response = await fetch(apiUrl + city +'&appid=${apiKey}');
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.location;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

checkWeather();

const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    let city = req.query.city;
    var request = require('request');
request('http://www,google.com', function (error, response, body) {
    if(response.statusCode === 200)
    {
        res.send('The weather in your city "${city}" is ${list[0].weather[0].description} ')
    }
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body); 
});
});

app.listen(3000, () => console.log('Server started on port 3000'));