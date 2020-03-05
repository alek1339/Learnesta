const isEmpty = require('./is-empty')
const Validator = require('validator')

module.exports = function validatelisteningExercise(data) {
    let errors = {}

    data.level = !isEmpty(data.level) ? data.level : ''
    data.exercise = !isEmpty(data.exercise) ? data.exercise : ''
    data.correctAnswer = !isEmpty(data.correctAnswer) ? data.correctAnswer : ''

    if (!Validator.isLength(data.level, {
            min: 2
        })) {
        errors.level = 'level must be between 2 and 90 characters'
    }
    if (Validator.isEmpty(data.level)) {
        errors.level = 'level field is required'
    }
    if (!Validator.isLength(data.exercise, {
            min: 2,
            max: 9000
        })) {
        errors.exercise = 'exercise must be between 12 and 9000 characters'
    }
    if (Validator.isEmpty(data.exercise)) {
        errors.exercise = 'exercise field is required'
    }
    if (!Validator.isLength(data.correctAnswer, {
            min: 2,
            max: 3000
        })) {
        errors.correctAnswer = 'correctAnswer must be between 2 and 30 characters'
    }
    if (Validator.isEmpty(data.correctAnswer)) {
        errors.correctAnswer = 'correctAnswer field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}