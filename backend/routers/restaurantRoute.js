const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController")

router.get("/get-all", restaurantController.getAllRestaurants);

module.exports = router;