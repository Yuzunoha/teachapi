const http = require('http');
const fetch = require('node-fetch');

const url = 'https://teachapi.herokuapp.com/posts';
const token = 'l4hKn0Wcp5sNBgQc9MZL7Qtt';

http.createServer((request, response) => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then(res => {
    return res.json();
  }).then(json => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const jsonStr = JSON.stringify(json);
    response.end(jsonStr);
    console.log('Success:', jsonStr)
  });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
