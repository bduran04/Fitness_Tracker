const router = require('express').Router();
const { Workout } = require('../models');
const mongoose = require("mongoose");
const express = require("express");

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.find({});
        res.json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.put("/api/workouts/:id", async ({ params, body }, res) => {
    try {
        const data = await Workout.findOneAndUpdate(
            { _id: params.id },
            { $push: { exercises: req.body } },
            { new: true }
        );
        res.json(data);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/api/workouts", async ({ body }, res) => {
    try {
        const data = await Workout.create({})
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