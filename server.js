const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//PORT needs to be made for a server

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then startin

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
