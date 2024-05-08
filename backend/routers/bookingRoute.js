const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController")

router.get("/get-all", bookingController.getAll);
router.post("/create", bookingController.create);
router.delete("/delete", bookingController.delete);

module.exports = router;