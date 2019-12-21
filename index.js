const http = require("http");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // port番号を指定

const url = "https://teachapi.herokuapp.com/posts";
const token = "l4hKn0Wcp5sNBgQc9MZL7Qtt";

// GET http://localhost:3000/api/v1/
app.get("/api/v1/get/", function(req, res) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
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
