const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const axios = require('axios');
const API_KEY = require('./sources/keys.json').API_KEY;

app.set('view engine', 'handlebars');
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  }),
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  let cityName = req.body.cityName;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

  try {
    const data = await axios(url);
    console.log(data.data.cod);
    const cityTemp = data.data.main.temp;
    let weatherText = `The temperature for the ${cityName} is ${cityTemp} °F today`;
    res.render('index', {
      weatherText
    })
  } catch (error) {
    const err = error.response.data;
    let cityNotFound = `${cityName} is not found!`
    if (err.cod == 404) {
      res.render('index', {
        cityNotFound
      })
    } else {
      let errMsg = err.message
      res.render('index', {
        errMsg
      })
    }
  };
});

app.listen(3000, () => {
  console.log('server started at port ' + 3000);
});