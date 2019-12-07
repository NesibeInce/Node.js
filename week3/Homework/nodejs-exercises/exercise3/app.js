const fetch = require('node-fetch');
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "name": "Nesibe Ince",
    "numberOfPeople": 10
  })
};

fetch(url, options)
  .then(res => res.text())
  .then(res => console.log(res))
  .catch(err => err.msg);