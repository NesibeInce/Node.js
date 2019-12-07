const fetch = require('node-fetch');
const url = 'http://api.icndb.com/jokes/random'

fetch(url).then(res => res.json())
  .then(res => res.value.joke)
  .then(res => console.log(res))
  .catch(err => err.msg);