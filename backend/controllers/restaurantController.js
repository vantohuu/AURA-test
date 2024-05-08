const restaurantController = {};
const listRestaurant = require("../mockdata/restaurant")

restaurantController.getAllRestaurants = async (req, res, next) => {
    try {
        res.status(200).json({
            data: listRestaurant,
            success: true,
            message: "Success",
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Sever is faulty",
        });
    }
};


module.exports = restaurantController;