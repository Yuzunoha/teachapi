var http = require('http');
var webclient = require("request");
const token = 'l4hKn0Wcp5sNBgQc9MZL7Qtt';

const promiseApiGet = () => {
  return new Promise(resolve => {
    webclient.get({
      url: "https://teachapi.herokuapp.com/posts",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
      }
    }, (error, response, body) => {
      const json = response.json;
      resolve(json);
    });
  });
};

http.createServer(function (request, response) {
  promiseApiGet().then(result => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(result);
  });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
