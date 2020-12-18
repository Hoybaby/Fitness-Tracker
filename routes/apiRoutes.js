
const router = require('express').Router();
const db = require("../models/Workout.js");


router.get("/api/workouts", function(req,res){
    db.find({}, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data);
        }
    })
        
})

router.post("/api/workouts", (req, res) => {
    db.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})

module.exports = router;