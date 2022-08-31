const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const bookings = [
    {name: "Booking 1"},
    {name: "Booking 2"},
    {name: "Booking 3"}
]

const createRouter = require("./helpers/create_router");

const bookingsRouter = createRouter(bookings);

app.use('/api/bookings', bookingsRouter)

app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})