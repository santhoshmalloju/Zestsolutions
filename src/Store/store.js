import {createStore,applyMiddleware,combineReducers} from 'redux'
import Reducer from '../Reducers/myReducer'
import logger from 'redux-logger'
const combinedReducers  = combineReducers({Reducer})


const store = createStore(combinedReducers,applyMiddleware(logger))
export default store