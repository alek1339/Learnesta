import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import listeningExercisess from './listiningExercisesReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  listeningExercisess: listeningExercisess
})
