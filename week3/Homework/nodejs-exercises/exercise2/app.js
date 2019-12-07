const fetch = require('node-fetch');
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
const options = {
  headers: {
    Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==',
  },
};
fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => err.msg);
