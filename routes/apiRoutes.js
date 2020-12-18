
const router = require('express').Router();
const db = require("../models/Workout");


router.get("/api/workouts", (req,res) => {
    db.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

})

module.exports = function(app) {

    app.get("/api/authors", function(req,res) {

    })





}