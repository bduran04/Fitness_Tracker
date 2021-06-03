const router = require('express').Router();
const { Workout } = require('../models');

//routes
router.get("/", async (req, res) => {
    try {
        const data = await Workout.find({});

        res.json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.put("/:id", (req, res) => {

});

router.post("/", (req, res) => {

});

router.get("/range", (req, res) => {

});


module.exports = router;