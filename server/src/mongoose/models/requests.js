const mongoose = require("mongoose");

//setting up the schema

const requestsSchema = mongoose.Schema({
});

//setting up the model
const Requests = mongoose.model("Requests", requestsSchema);

module.exports = Requests;
