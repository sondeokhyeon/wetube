//const express = require('express')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParse from "cookie-parser";
import bodyParse from "body-parser";
import userRouter from "./router/userRouter"
import videoRouter from "./router/videoRouter"
import globalRouter from "./router/globalRouter"
import routes from "./routes"

const app = express()

app.set("view engine", "pug");
app.use(cookieParse());                                 // cookie관련 middleware 쿠키 사용을 도와줌 
app.use(bodyParse.json());                              // req, res 정보들을 검사 하는 middleware
app.use(bodyParse.urlencoded({ extended: true }));
app.use(helmet());                                      // 보안   middleware
app.use(morgan("dev"));                                 // logger middleware

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);                      // 라우터 등록
app.use(routes.videos, videoRouter);                    // 라우터 사용 

export default app;



/*
const handlehome = (req, res) => res.send('Hello1 From Home!');

const handleprofile = (req, res) => res.send('You are on my profile');

const betweenHome = (req, res, next) => {
    console.log('Between')
    next();
}; 전역 사용

const middleware = (req, res, next) => {
    res.send("not happening")
};
app.use(betweenHome);  // 미들웨어 전역 사용

app.get("/", middleware, handlehome);

app.get("/", handlehome);

app.get("/profile", handleprofile);
*/