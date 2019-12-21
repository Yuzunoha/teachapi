// ライブラリ読み込み
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // port番号を指定

// GET http://localhost:3000/api/v1/
app.get("/api/v1/", function(req, res) {
  res.json({
    message: "Hello,world"
  });
});

//サーバ起動
app.listen(port);
console.log("listen on port " + port);
