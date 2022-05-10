const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data'); // 코드 리팩토링

const router = express.Router();

router.get('/restaurants', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
  // res.sendFile(htmlFilePath);
  const storedRestaurants = resData.getStoredRestaurants();

  res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});

//클릭한 식당의 상세정보
router.get('/restaurants/:id', function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurant-detail', { restaurant: restaurant });
    }
  }

  res.status(404).render('404'); // 404 에러 표시
});

router.get('/recommend', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
  // res.sendFile(htmlFilePath);
  res.render('recommend');
});

router.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storedRestaurants(restaurants);

  res.redirect('/confirm');
});

router.get('/confirm', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  // res.sendFile(htmlFilePath);
  res.render('confirm');
});

module.exports = router;
