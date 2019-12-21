const fetch = require('node-fetch');

const url = 'https://teachapi.herokuapp.com/posts';
const token = 'l4hKn0Wcp5sNBgQc9MZL7Qtt';
// const data = { username: 'example' };

fetch(url, {
  method: 'GET',
  // body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
}).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
