const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creat News Schema
const ListeningExerciseSchema = new Schema({
    level: {
        type: String,
        required: true
    },
    exercise: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String
    }
})

module.exports = ListeningExercise = mongoose.model('listening-exercise', ListeningExerciseSchema)