import {
    FETCH_LISTENING_EXERCISES
} from '../actions/types'

const initial = []

const initialState = {
    level: '',
    exercise: '',
    correctAnswer: '',
}

initial.push(initialState)

export default function (state = initial, action) {
    switch (action.type) {
        case FETCH_LISTENING_EXERCISES:
            return action.payload
        default:
            return state
    }
}