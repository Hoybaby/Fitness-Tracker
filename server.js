const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongojs = require("mongojs");

//PORT needs to be made for a server

var app = express();
var PORT = process.env.PORT || 8080;
app.use(morgan("dev"))
// const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const databaseUrl = "FitnessTracker";
const collections = ["workout"];

const db = mongojs(databaseUrl, collections)

db.on("error", error => {
  console.log("Database Error", error);
})


// Routes
// =============================================================

// Syncing our sequelize models and then startin

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
