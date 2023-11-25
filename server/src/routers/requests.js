const express = require("express");
const Requests = require("../mongoose/models/requests");

//setting up the request router
const requestRouter = express.Router();

module.exports = requestRouter;