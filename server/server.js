const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (request, response) => {
    response.json({"message": "hello world"})
})



app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})