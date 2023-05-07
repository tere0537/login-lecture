// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
//     if (req.url === '/') {
//         res.end("여기는 무료압니다.")
//     } else if(req.url === '/login'){
//         res.end("여기는 로그인 입니다.")
//     } 
// });

// app.listen(3001, () => {
//     console.log("가동된 서버 입니다.");
// })

"use strict"

// 모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

// 웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.static(`${__dirname}/src/css`));


app.use("/", home);


module.exports = app;

