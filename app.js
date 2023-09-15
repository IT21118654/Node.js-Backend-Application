const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/user-router");
const app = express();
const cors = require("cors");
const https = require('https');
const routes = require("./model/User");
const { getById } = require('./controllers/user-controller');
const userController = require("./controllers/user-controller");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/user", userRoute); //localhost:5000/user

//const getById = async (req, res, next) => {
   // const id = req.params.id;
   // let user;
   // try {
    //  user = await User.findById(id);
    //} catch (err) {
    //  console.log(err);
   // }
   // if (!user) {
     // return res.status(404).json({ message: "No user found" });
    //}
    //return res.status(200).json(user);
  //};

app.get('/', (req,res)=> {
   // User = getById;
   // const { location } =
   // req.body;
    const querry = User(location)
    const apiKey = 'a99421de368af0c3c57cba160d978e4b'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ querry + '&appid=' + apiKey + '&units=metric'
    https.get(url, (response) =>{
        //console.log(response.statusCode);
        response.on('data', (data) =>{
            //console.log(data)
           const weatherData = JSON.parse(data)
          // console.log(WeatherData);
          const temp = weatherData.main.temp;
          const discription = weatherData.weather[0].description
          //console.log(discription);
            res.write("<h1>The temperature in " + querry + " is " + temp + " degree celcius</h1>" )
            res.write("<p> The weather discription is " + discription + "</p>")
        })
    })
  
})

mongoose.
    connect(
        "mongodb+srv://admin:Apple123@cluster0.l6bs1gr.mongodb.net/"
    )
    .then(()=>console.log("Connected to Database"))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err));

exports.getById = getById;