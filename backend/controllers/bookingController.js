const bookingController = {};
const bookingAction = require("../mockdata/booking")

bookingController.getAll = async (req, res, next) => {
    try {
       
        res.status(200).json({
            data: bookingAction.getAll(),
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


bookingController.create = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(req.body);
        if (!body) {
          res.status(200).json({
            success: false,
            message: "Body is empty",
          });
        }
        const listBooking = bookingAction.getAll();
        const id = listBooking.length == 0 ? 1 : listBooking[listBooking.length-1].id + 1
        const booking = {
            id,
            ...body
        } 
        bookingAction.create(booking);
        res.status(200).json({
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

bookingController.delete = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(req.body);
        if (!body || !body.id) {
          res.status(200).json({
            success: false,
            message: "Body is empty",
          });
        }
        bookingAction.delete(body.id);
        res.status(200).json({
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



module.exports = bookingController;