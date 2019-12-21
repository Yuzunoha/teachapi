const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // port番号を指定

const url = 'https://teachapi.herokuapp.com/posts';
const token = 'l4hKn0Wcp5sNBgQc9MZL7Qtt';

const getHeaderObj = req => {
  const authorization = req.header('authorization');
  return {
    'Content-Type': 'application/json',
    Authorization: authorization
  };
};

// CORSを許可する
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/v1/get/', function(req, res) {
  headerObj = getHeaderObj(req);
  fetch(url, {
    method: 'GET',
    headers: headerObj
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      res.json(responseJson);
    });
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
