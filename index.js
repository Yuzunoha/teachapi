const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // port番号を指定

const urlPosts = 'https://teachapi.herokuapp.com/posts';
const urlSignUp = 'https://teachapi.herokuapp.com/sign_up';

// ヘッダーオブジェクトを作成する
const getHeaderObj = req => {
  const authorization = req.header('Authorization');
  return {
    'Content-Type': 'application/json',
    Authorization: authorization
  };
};

// CORSを許可する
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// POSTを処理できるようにする
app.use(bodyParser());

// コメント全取得
app.get('/api/v1/get', (req, res) => {
  const headerObj = getHeaderObj(req);
  fetch(urlPosts, {
    method: 'GET',
    headers: headerObj
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      res.json(JSON.stringify(responseJson));
    });
});

// コメント送信
app.post('/api/v1/post', (req, res) => {
  const headerObj = getHeaderObj(req);
  const bodyJson = JSON.stringify(req.body);
  fetch(urlPosts, {
    method: 'POST',
    headers: headerObj,
    body: bodyJson
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      res.json(JSON.stringify(responseJson));
    });
});

// ユーザ登録
app.post('/api/v1/sign_up', (req, res) => {
  const headerObj = getHeaderObj(req);
  const bodyJson = JSON.stringify(req.body);
  fetch(urlSignUp, {
    method: 'POST',
    headers: headerObj,
    body: bodyJson
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      res.json(JSON.stringify(responseJson));
    });
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
