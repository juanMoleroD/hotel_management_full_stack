const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors);
app.use(express.json());


app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})
