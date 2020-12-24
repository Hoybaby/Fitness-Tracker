
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

router.put("/api/workouts/:id", function (req, res) {
    console.log("Added an Exercise")
    db.findByIdAndUpdate(req.params.id,
        { $push : {exercises: req.body}},
        {new: true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/:range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;