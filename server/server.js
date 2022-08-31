const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const guests = [
    {name: "guest 1"},
    {name: "guest 2"},
    {name: "guest 3"}
]

const createRouter = require("./helpers/create_router");

const guestRouter = createRouter(guests);

app.use('/api/guests', guestRouter)

app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})