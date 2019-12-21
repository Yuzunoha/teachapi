const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // port番号を指定

const url = "https://teachapi.herokuapp.com/posts";
const token = "l4hKn0Wcp5sNBgQc9MZL7Qtt";

const getHeaderObj = req => {
  const authorization = req.header("authorization");
  return {
    "Content-Type": "application/json",
    Authorization: authorization
  };
};

app.get("/api/v1/get/", function(req, res) {
  // { host: 'localhost:3000',
  // 'user-agent': 'curl/7.58.0',
  // accept: '*/*',
  // 'content-type': 'application/json',
  // authorization: 'Bearer l4hKn0Wcp5sNBgQc9MZL7Qtt' }
  headerObj = getHeaderObj(req);
  console.log(headerObj);

  fetch(url, {
    method: "GET",
    headers: headerObj
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      // 返却する
      res.json({
        json: json
      });
    });
});

//サーバ起動
app.listen(port);
console.log("listen on port " + port);
