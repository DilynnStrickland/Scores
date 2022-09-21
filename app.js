"use strict";

require("dotenv").config();
const express = require("express");
const app = express();

const infoController = require("./Controllers/infoController");

// Allow access to static resources in the public directory
app.use(express.static("public", {index: "index.html", extensions: ["html"]}));

app.get("/", (req, res) => {
    res.render("/index");
});

app.get("/DilynnsGames", async (req, res) => {
    let event = await infoController.nextEvent(6);  // cowboys

    res.send(event);
});

app.get("/KayleesGames", async (req, res) => {
    let event = await infoController.nextEvent(24);  // chargers

    res.send(event);
});

module.exports = app;