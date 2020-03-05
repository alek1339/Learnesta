import {
    FETCH_LISTENING_EXERCISES
} from './types'
import axios from 'axios'

export const fetchListeningExercises = () => dispatch => {
    axios.get('/api/cars/edit-cars')
        .then(res => dispatch({
            type: FETCH_LISTENING_EXERCISES,
            payload: res.data
        }))
        .catch(err => console.log(err))
}