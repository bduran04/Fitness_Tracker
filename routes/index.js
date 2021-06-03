const router = require('express').Router();

router.use(require('./homeRoutes'));
router.use("/api/workouts", require('./workoutRoutes'))

module.exports = router;