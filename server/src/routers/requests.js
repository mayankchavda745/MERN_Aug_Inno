const express = require("express");
const Students = require("../mongoose/models/students");

//setting up the request router
const studentRouter = express.Router();

module.exports = studentRouter;