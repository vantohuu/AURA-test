const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const dir = path.join(__dirname, 'public');

const port = 3001;

const restaurantRoute = require("./routers/restaurantRoute")
const bookingRoute = require("./routers/bookingRoute")


const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));

app.use(express.static(dir));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/restaurant", restaurantRoute);
app.use("/booking", bookingRoute);


