const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //use seed folder to match how the schema looks like 
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Must put in a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Must put in a name of exercise"
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;