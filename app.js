// const fs = require('fs');
const path = require('path');
// 내장 패키지

const express = require('express');
// 외부 패키지 , uuid는 리팩토링 과정에서 restaurant.js 로 옮김

const defaultRoutes = require('./routes/default'); // 라우터
const restaurantRouter = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 이 앱에 대한 특정 옵션 설정

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/', restaurantRouter);

// 404에러 처리
app.use(function (req, res) {
  res.status(404).render('404');
});

// 500 서버에러처리
app.use(function (error, req, res, next) {
  res.status(500).render('500');
});

app.listen(3000);
