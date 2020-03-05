const express = require('express')
const router = express.Router()

const validatelisteningExercise = require('../../validation/listening-exercise')

const ListeningExercise = require('../../models/ListeningExercise')

// @route   POST exercises/listening-exercises/add
// @desc    Post listening-exercises
// @access  Private
router.post('/add', (req, res) => {
    //  Check Validation
    const {
        errors,
        isValid
    } = validatelisteningExercise(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newListeningExercise = new ListeningExercise({
        level: req.body.level,
        exercise: req.body.exercise,
        correctAnswer: req.body.correctAnswer,
    })


    newListeningExercise
        .save()
        .then(exercise => res.json(exercise))
        .catch(err => console.log('Error:' + err))
})

// @route   GET exercises/listening-exercises
// @desc    Get listening-exercises
// @access  Public
router.get('/', (req, res) => {
    ListeningExercise.find()
        .sort({
            date: -1
        })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({
            noexercises: 'No exercises found'
        }))
})

module.exports = router