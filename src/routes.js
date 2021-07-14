const express = require("express");
const routes = express.Router();
const questionController = require("./controllers/questionController");
const sobreController = require("./controllers/sobreController");

const bodyParser = require("body-parser");
const apoieController = require("./controllers/apoieController");

routes.use(bodyParser.urlencoded({ extended: true }));

routes.get("/", questionController.showQuestions);
routes.get("/results", questionController.showResults);
routes.post("/results", questionController.vote);
routes.get("/sobre", sobreController.showSobre);
routes.get("/apoie", apoieController.showApoie)

module.exports = routes;
