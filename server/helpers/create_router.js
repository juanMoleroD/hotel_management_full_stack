const express = require("express");

const createRouter = (data) => {

    const Router = express.Router();

    Router.get("/", (request, response) => {
        response.json(data);
    })

    Router.post("/", (request, response) => {
        const newDataToAdd = request.body;
        data.push(newDataToAdd);
        response.json(data)
    })

    Router.delete("/:id", (request,response) => {
        const id = request.params.id;
        data.splice(id, 1);
        response.json(data)
    })

    return Router;
}

module.exports = createRouter;