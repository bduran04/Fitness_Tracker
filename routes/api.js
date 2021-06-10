const router = require('express').Router();
const Workout  = require('../models');

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.find({});
        res.json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Workout.findOneAndUpdate(
            { _id: id },
            { $push: { exercises: req.body } }
        );
        res.json(data);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.create(req.body)
        res.json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;