const http = require('http');
const fetch = require('node-fetch');

const url = 'https://teachapi.herokuapp.com/posts';
const token = 'l4hKn0Wcp5sNBgQc9MZL7Qtt';


http.createServer((request, response) => {
  fetch(url, {
    method: 'GET',
    // body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer l4hKn0Wcp5sNBgQc9MZL7Qtt'
    }
  }).then(res => {
    return res.json();
  }).then(result => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(JSON.stringify(result));
    console.log('Success:', JSON.stringify(result))
  }).catch(error => {
    console.error('Error:', error)
  });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
