const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createRouter = (collection) => {

    const Router = express.Router();

    Router.get("/", (request, response) => {
        collection
            .find()
            .toArray()
            .then(docs => response.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
              });
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