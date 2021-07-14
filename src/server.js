const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "ejs");

server.use(routes);

server.listen(8080, () => console.log("running"));
