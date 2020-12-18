
const router = require('express').Router();
const db = require("../models");


router.get("/workouts", (req,res) => {
    db.Workout.find({})
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